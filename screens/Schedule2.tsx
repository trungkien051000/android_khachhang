import { button, common, container, flexbox, login, schedule, spacing } from '@assets/styles';
import { images, routes, api } from '@utils/constants';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { default as Button, default as TextView } from '@components/commons/TextView';
import { useTrans } from '@utils/hooks';
import axios from 'axios';
import { refresh } from '@react-native-community/netinfo';
const styles = StyleSheet.create({
    ...common,
    ...flexbox,
    ...spacing,
    ...login,
    ...container,
    ...button,
    ...schedule,
});
const Schedule2: IScheduleScreen<IScheduleScreenProps> = (props) => {
    const { navigation } = props;
    const trans = useTrans();
    const [state, setState] = useState([
        {
            MaBaoTri: '',
            TieuDe: '',
            MoTa: '',
            htnv: '',
            htkh: '',
            TenThietBi: '',
            TienDo: '',
            TrangThai: '',
            MaDuyetBT: '',
        },
    ]);

    useEffect(() => {
        setState(props.route.params.datahoanthanh);
    }, [props.route]);
    const dnGet = (index: number) => {
        let url = api.API_URL + '/baotriKHHoanThanh/' + props.route.params.idKH;
        axios.get(url).then((aData) => {
            navigation?.navigate(routes.CLIENT.DETAILSCHEDULE, { data: aData.data, index: index, onGoBack: () => refresh() });
        });
    };
    const refresh = () => {
        let url1 = api.API_URL + '/baotriKHHoanThanh/' + props.route.params.idKH;
        axios.get(url1).then((aData) => {
            setState(aData.data);
        });
    };
    return (
        <View style={[{ flex: 1 }, styles.container]}>
            <TextView style={[styles.font_size_17]}>
                {' '}
                Tổng số lịch bảo trì hoàn thành: {props.route.params.counthoanthanh[0].count}{' '}
            </TextView>
            <FlatList
                data={state}
                renderItem={({ item, index }) => (
                    <TouchableWithoutFeedback onPress={() => dnGet(index)}>
                        <View style={[styles.schedule_container]}>
                            <Text style={styles.color_blue}>
                                {item.MaBaoTri} - {item.TieuDe}
                            </Text>
                            <View style={[{ flexDirection: 'row' }]}>
                                <Text>Nhân viên: </Text>
                                <Text style={[styles.color_green, { flexShrink: 1 }]}>{item.htnv}</Text>
                            </View>
                            <Text>Mô tả: {item.MoTa}</Text>
                            <View style={[{ flex: 1, flexDirection: 'row' }]}>
                                <Text>Tên khách hàng: </Text>
                                <Text style={styles.color_orange}>{item.htkh}</Text>
                            </View>
                            <Text>{item.TenThietBi}</Text>
                            <Text style={styles.color_blue}>Tiến độ: {item.TienDo}</Text>
                            <Text style={styles.color_red}>Trạng thái: {item.TrangThai}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        </View>
    );
};

export default Schedule2;
