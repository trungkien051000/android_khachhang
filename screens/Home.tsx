import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Button } from '@components/index';

import { routes, api } from '@utils/constants';

import { ReduxStates } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';

import { common, container, flexbox, home, spacing } from '@assets/styles';
import axios from 'axios';
const styles = StyleSheet.create({
    ...container,
    ...flexbox,
    ...home,
    ...spacing,
    ...common,
});

const Home: IHomeScreen<IHomeScreenProps> = (props) => {
    const { navigation } = props;
    const dispatch = useDispatch();

    const dnGet = (routeName: string) => {
        switch (routeName) {
            case 'Schedule':
                let url1 = api.API_URL + '/baotriKH/' + props.route.params.idKH;
                let urlCountBTKH = api.API_URL + '/countbaotri/' + props.route.params.idKH;
                let urlChuaDuyet = api.API_URL + '/baotriKHChuaDuyet/' + props.route.params.idKH;
                let urlHoanThanh = api.API_URL + '/baotriKHHoanThanh/' + props.route.params.idKH;
                let urlCountChuaDuyet = api.API_URL + '/countbaotriChuaDuyet/' + props.route.params.idKH;
                let urlCountHoanThanh = api.API_URL + '/countbaotriHoanThanh/' + props.route.params.idKH;
                axios.get(url1).then((aData) => {
                    axios.get(urlChuaDuyet).then((bData) => {
                        axios.get(urlHoanThanh).then((cData) => {
                            axios.get(urlCountBTKH).then((count) => {
                                axios.get(urlCountChuaDuyet).then((countChuaDuyet) => {
                                    axios.get(urlCountHoanThanh).then((countHoanThanh) => {
                                        navigation?.navigate(routes.CLIENT.SCHEDULE, {
                                            screen: routes.CLIENT.SCHEDULE1,
                                            params: {
                                                idKH: props.route.params.idKH,
                                                datachuaduyet: bData.data,
                                                countchuaduyet: countChuaDuyet.data,
                                            }
                                        });
                                        navigation?.navigate(routes.CLIENT.SCHEDULE, {
                                            screen: routes.CLIENT.SCHEDULE2,
                                            params: {
                                                idKH: props.route.params.idKH,
                                                datahoanthanh: cData.data,
                                                counthoanthanh: countHoanThanh.data,
                                            }
                                        });
                                        navigation?.navigate(routes.CLIENT.SCHEDULE, {
                                            screen: routes.CLIENT.SCHEDULE,
                                            params: {
                                                idKH: props.route.params.idKH,
                                                data: aData.data,
                                                count: count.data,
                                            },
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                break;
            case 'Book':
                let urlthietbi = api.API_URL + '/thietbikh/' + props.route.params.idKH;
                let url2 = api.API_URL + '/khachhang/' + props.route.params.idKH;
                let url3 = api.API_URL + '/maxBaoTri';
                axios.get(url2).then((aData) => {
                    axios.get(url3).then((bData) => {
                        axios.get(urlthietbi).then((thietbi) => {
                            navigation?.navigate(routes.CLIENT.BOOK, {
                                idKH: props.route.params.idKH,
                                data: aData.data,
                                max: bData.data,
                                dsthietbi: thietbi.data,
                            });
                        });
                    });
                });
                break;
            case 'Setting':
                let url4 = api.API_URL + '/khachhang/' + props.route.params.idKH;
                axios.get(url4).then((aData) => {
                    navigation?.navigate(routes.CLIENT.SETTING, { idKH: props.route.params.idKH, data: aData.data });
                });
                break;
        }
    };

    const navigationSchedule = () => {
        dnGet.bind(this);
        navigation?.navigate(routes.CLIENT.SCHEDULE, { idKH: props.route.params.idKH });
    };

    const navigationBook = () => {
        navigation?.navigate(routes.CLIENT.BOOK, {});
    };

    const navigationSetting = async () => {
        navigation?.navigate(routes.CLIENT.SETTING, { idKH: props.route.params.idKH });
    };

    return (
        <ScrollView
            style={[styles.dFlex1]}
            contentContainerStyle={[styles.container, styles.justifyCenter]}
            showsVerticalScrollIndicator={false}>
            <Button
                text="Lịch bảo trì"
                style={styles.home_button}
                styleText={[styles.font_size_24, styles.color_white, styles.text_center, styles.font_weight_bold]}
                onPress={() => dnGet('Schedule')}
            />
            <Button
                text="Đặt lịch bảo trì"
                style={styles.home_button}
                styleText={[styles.font_size_24, styles.color_white, styles.text_center, styles.font_weight_bold]}
                onPress={() => dnGet('Book')}
            />
            <Button
                text="Cài đặt"
                style={styles.home_button}
                styleText={[styles.font_size_24, styles.color_white, styles.text_center, styles.font_weight_bold]}
                onPress={() => dnGet('Setting')}
            />
        </ScrollView>
    );
};

export default Home;
