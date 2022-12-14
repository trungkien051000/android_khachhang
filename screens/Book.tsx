import { common, container, flexbox, login, modal, spacing } from '@assets/styles';
import Button from '@components/commons/Button';
import Input from '@components/commons/Input';
import TextView from '@components/commons/TextView';
import Validator from '@components/commons/Validator';
import { Picker } from '@react-native-picker/picker';
import { images, routes, api } from '@utils/constants';
import { useTrans } from '@utils/hooks';
import axios from 'axios';
import React, { createRef, useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
    ...common,
    ...flexbox,
    ...spacing,
    ...login,
    ...container,
    ...modal,
});

const Book: IBookScreen<IBookScreenProps> = (props) => {
    const { navigation } = props;
    const [date, setDate] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [openDate, setOpenDate] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [state, setState] = useState({
        MaKhachHang: '',
        DoanhNghiep: '',
        DiaChi: '',
        TenPhuong: '',
        TenQuan: '',
        TenTP: '',
        ThietBi: {},
    });
    const [state1, setState1] = useState({
        TieuDe: '',
        MoTa: '',
        Ngay: '',
        TenThietBi: '',
        Gio: '',
    });
    const [thietbi, setThietBi] = useState([]);
    const { MaKhachHang, DoanhNghiep, DiaChi, TenPhuong, TenQuan, TenTP, ThietBi } = state;
    const { TieuDe, MoTa, Ngay, TenThietBi, Gio } = state1;
    const [isModalVisible, setModalVisible] = useState(false);

    const trans = useTrans();
    const tieudeValidatorRef = createRef<IValidatorComponentHandle>();
    const motaValidatorRef = createRef<IValidatorComponentHandle>();

    const showToast = () => {
        ToastAndroid.show('B???n ???? ????ng k?? l???ch b???o tr?? th??nh c??ng !', ToastAndroid.LONG);
    };

    useEffect(() => {
        setState(props.route.params.data[0]);
        setThietBi(props.route.params.dsthietbi);
    }, []);
    const timeSelected =
        (time.getHours() < 10 ? '0' : '') + time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();

    let dateSelected = '' ;
    const handleDateData = (date: Date) => {
        return (
            (date.getDate() < 10 ? '0' : '') +
            date.getDate() +
            '/' +
            (date.getMonth() + 1 < 10 ? '0' : '') +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear()
        );
    };
    const handleChangeData = (field: string, value: string | number | boolean) => {
        setState1((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    const checkThietBi = (ThietBi: String) => {
        if (ThietBi === 'M??y Jura Impressa A5') return 1;
        if (ThietBi === 'M??y Jura Impressa A8') return 2;
        if (ThietBi === 'M??y Jura Impressa S9') return 3;
        if (ThietBi === 'M??y Melitta Caffeo Passione') return 4;
        if (ThietBi === 'M??y Melitta CI Touch') return 5;
        if (ThietBi === 'M??y Melitta Caffeo Solo') return 6;
        if (ThietBi === 'M??y Ascaso Dream 14') return 7;
        if (ThietBi === 'M??y Ascaso Basic 11') return 8;
        if (ThietBi === 'M??y Ascaso Uno 12') return 9;
        if (ThietBi === 'M??y Faema E71') return 10;
        if (ThietBi === 'M??y Faema E98 RE A') return 11;
        if (ThietBi === 'M??y Faema E61 Jubile DT2') return 12;
        if (ThietBi === 'M??y Faema Enova A2') return 13;
    };
    const navigationSchedule = () => {
        let isValidate = true;
        if (TieuDe === '') {
            tieudeValidatorRef.current?.onValidateMessage(trans.book.err_inputTieuDe);
            isValidate = false;
        } else {
            tieudeValidatorRef.current?.onValidateMessage('');
        }

        if (MoTa === '') {
            motaValidatorRef.current?.onValidateMessage(trans.book.err_inputMoTa);
            isValidate = false;
        } else {
            motaValidatorRef.current?.onValidateMessage('');
        }
        if (isValidate) {
            handleChangeData('TieuDe', '');
            handleChangeData('MoTa', '');
            showToast();
        }
    };
    const convertDate = (date: string) => {
        let year;
        let month;
        let day;
        if (date.length > 12) {
            year = Number(date.substring(0, 4));
            month = Number(date.substring(5, 7));
            day = Number(date.substring(8, 10)) + 1;
        } else {
            year = Number(date.substring(6, 10));
            month = Number(date.substring(3, 5));
            day = Number(date.substring(0, 2));
        }
        return (year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day).toString();
    };

    const stringToDate = (string: string) => {
        if (string.length > 12) {
            let year = Number(string.substring(0, 4));
            let month = Number(string.substring(5, 7));
            let day = Number(string.substring(8, 10));
            return ((day < 10 ? '0' : '') + (day + 1) + '/' + (month < 10 ? '0' : '') + month + '/' + year).toString();
        } else return string;
    };
    const toggleModal = (confirm: boolean) => {
        if (confirm) {
            navigationSchedule();
        }
        setModalVisible(!isModalVisible);
    };
    const getCurrentDay = () => {
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        return ((day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year).toString();
    };
    const handleBooking = () => {
        let currentDay = getCurrentDay();
        if (stringToDate(Ngay)) {
            if (stringToDate(Ngay) < currentDay) {
                ToastAndroid.show('Kh??ng ???????c ch???n ng??y nh??? h??n ng??y hi???n t???i!', ToastAndroid.LONG);
            } else {
                let baotri = api.API_URL + '/baotri';
                let maxbinhluan = api.API_URL + '/maxBinhLuan';
                let binhluan = api.API_URL + '/baotriKH/binhluan';
                let chitietbaotri = api.API_URL + '/chitietbaotri';
                axios.get(maxbinhluan).then((maBL) => {
                    axios
                        .post(binhluan, {
                            mabinhluan: maBL.data[0].maxMa + 1,
                        })
                        .then(() => {
                            axios
                                .post(baotri, {
                                    tieude: TieuDe,
                                    mota: MoTa,
                                    makhachhang: MaKhachHang,
                                    mabinhluan: maBL.data[0].maxMa + 1,
                                })
                                .then((response) => {
                                    axios
                                        .post(chitietbaotri, {
                                            ngay: convertDate(Ngay),
                                            mabaotri: props.route.params.max[0].maxMa,
                                            mathietbi: checkThietBi(TenThietBi),
                                        })
                                        .then((response) => {
                                            showToast();
                                        });
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        });
                });
            }
        } else {
            ToastAndroid.show('Vui l??ng ch???n ng??y ?????t l???ch!', ToastAndroid.LONG);
        }
    };
    return (
        <>
            <ScrollView style={[styles.dFlex1]} contentContainerStyle={[styles.container]} showsVerticalScrollIndicator={false}>
                <View style={[styles.background_white, styles.border_Radius10, styles.padding10]}>
                    <View>
                        <Validator ref={tieudeValidatorRef}>
                            <View>
                                <Text>{trans.book.tieude}</Text>
                                <View style={[styles.flexRow, styles.borderBottom_gray]}>
                                    <Input
                                        style={[styles.login_input]}
                                        value={TieuDe}
                                        onChangeText={(data) => {
                                            handleChangeData('TieuDe', data);
                                        }}
                                    />
                                </View>
                            </View>
                        </Validator>
                    </View>

                    <View style={[styles.marginVertical15]}>
                        <Validator ref={motaValidatorRef}>
                            <View>
                                <Text>{trans.book.mota}</Text>
                                <View style={[styles.flexRow, styles.borderBottom_gray]}>
                                    <Input
                                        style={[styles.login_input]}
                                        value={MoTa}
                                        onChangeText={(data) => {
                                            handleChangeData('MoTa', data);
                                        }}
                                    />
                                </View>
                            </View>
                        </Validator>
                    </View>
                    <TextView style={[styles.marginTop10, styles.color_gray, styles.font_weight_bold, styles.font_size_13]}>
                        Thi???t b???
                    </TextView>
                    <Picker selectedValue={TenThietBi} onValueChange={(itemValue, itemIndex) => handleChangeData('TenThietBi', itemValue)}>
                        {/* <Picker.Item label="M??y Jura Impressa A5" value="M??y Jura Impressa A5" />
                        <Picker.Item label="M??y Jura Impressa A8" value="M??y Jura Impressa A8" />
                        <Picker.Item label="M??y Jura Impressa S9" value="M??y Jura Impressa S9" />
                        <Picker.Item label="M??y Melitta Caffeo Passione" value="M??y Melitta Caffeo Passione" />
                        <Picker.Item label="M??y Melitta CI Touch" value="M??y Melitta CI Touch" />
                        <Picker.Item label="M??y Melitta Caffeo Solo" value="M??y Melitta Caffeo Solo" />
                        <Picker.Item label="M??y Ascaso Dream 14" value="M??y Ascaso Dream 14" />
                        <Picker.Item label="M??y Ascaso Basic 11" value="M??y Ascaso Basic 11" />
                        <Picker.Item label="M??y Ascaso Uno 12" value="M??y Ascaso Uno 12" />
                        <Picker.Item label="M??y Faema E71" value="M??y Faema E71" />
                        <Picker.Item label="M??y Faema E98 RE A" value="M??y Faema E98 RE A" />
                        <Picker.Item label="M??y Faema E61 Jubile DT2" value="M??y Faema E61 Jubile DT2" />
                        <Picker.Item label="M??y Faema Enova A2" value="M??y Faema Enova A2" />
                         */}
                        {thietbi.map((item, index) => {
                            return <Picker.Item label={item.TenThietBi} value={item.TenThietBi} key={index} />;
                        })}
                    </Picker>
                    <View style={[styles.marginVertical15]}>
                        <View>
                            <Text>{trans.book.doanhnghiep}</Text>
                            <View style={[styles.flexRow, styles.borderBottom_gray]}>
                                <Input
                                    style={[styles.login_input, styles.color_gray]}
                                    value={DoanhNghiep}
                                    selectTextOnFocus={false}
                                    editable={false}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.marginVertical15]}>
                        <View>
                            <Text>{trans.book.diachi}</Text>
                            <View style={[styles.flexRow, styles.borderBottom_gray]}>
                                <Input
                                    style={[styles.login_input, styles.color_gray, { height: 'auto' }]}
                                    value={DiaChi + ', ' + TenPhuong + ', ' + TenQuan + ', ' + TenTP}
                                    selectTextOnFocus={false}
                                    editable={false}
                                    multiline={true}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.marginVertical15]}>
                        <View>
                            <Text>{trans.book.pickdate}</Text>
                            <View style={[styles.flexRow, styles.borderBottom_gray]}>
                                <TouchableOpacity
                                    style={[styles.login_input, styles.flexRow, { width: '100%' }]}
                                    onPress={() => setOpenDate(true)}>
                                    <Input
                                        style={[styles.login_input]}
                                        placeholder={trans.book.pickdate}
                                        value={Ngay !== null ? (Ngay.length > 10 ? stringToDate(Ngay) : Ngay) : ''}
                                        selectTextOnFocus={false}
                                        editable={false}
                                    />
                                    <View style={[styles.justifyCenter]}>
                                        <Image source={images.ICON_CALENDAR} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Button
                            style={[styles.marginTop10]}
                            styleText={[styles.font_size_17]}
                            text={trans.common.confirm}
                            onPress={handleBooking.bind(this)}
                        />
                    </View>

                    <DatePicker
                        modal={true}
                        title={trans.common.dateTitle}
                        cancelText={trans.common.dateTimeCancel}
                        confirmText={trans.common.dateTimeConfirm}
                        mode="date"
                        androidVariant="nativeAndroid"
                        open={openDate}
                        date={date}
                        locale={trans.common.locale}
                        onConfirm={(date) => {
                            setOpenDate(false);
                            setDate(date);
                            dateSelected = handleDateData(date);
                            handleChangeData('Ngay', dateSelected);
                        }}
                        onCancel={() => {
                            setOpenDate(false);
                        }}
                    />

                    <DatePicker
                        modal={true}
                        title={trans.common.timeTitle}
                        cancelText={trans.common.dateTimeCancel}
                        confirmText={trans.common.dateTimeConfirm}
                        mode="time"
                        androidVariant="nativeAndroid"
                        is24hourSource="locale"
                        open={openTime}
                        date={time}
                        locale={trans.common.locale}
                        onConfirm={(time) => {
                            setOpenTime(false);
                            setTime(time);
                            handleChangeData('Gio', timeSelected);
                        }}
                        onCancel={() => {
                            setOpenTime(false);
                        }}
                    />
                    <Modal
                        isVisible={isModalVisible}
                        animationIn="fadeIn"
                        animationInTiming={200}
                        animationOut="fadeOut"
                        animationOutTiming={200}>
                        <View style={[styles.dFlex1, styles.alignItemsCenter, styles.justifyCenter, styles.alignSelfCenter]}>
                            <View style={[styles.modal_container, styles.padding20]}>
                                <View style={[styles.alignItemsCenter, styles.justifyCenter, styles.marginVertical32]}>
                                    <Text style={[styles.text_center, styles.font_size_17]}>{trans.book.message_confirm}</Text>
                                </View>
                                <View style={[styles.flexRow, styles.alignItemsCenter, styles.justifyCenter]}>
                                    <Button
                                        text={trans.common.ok}
                                        style={[styles.modal_button_ok]}
                                        onPress={() => {
                                            toggleModal(true);
                                        }}
                                    />
                                    <Button
                                        text={trans.common.cancel}
                                        style={[styles.modal_button_cancel, styles.marginLeft20]}
                                        styleText={[styles.color_black]}
                                        onPress={() => {
                                            toggleModal(false);
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </>
    );
};
export default Book;
