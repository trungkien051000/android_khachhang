import { button, common, container, flexbox, login, spacing } from '@assets/styles';
import Input from '@components/commons/Input';
import TextView from '@components/commons/TextView';
import { ReduxStates } from '@redux/reducers';
import { images, routes, api } from '@utils/constants';
import { useTrans } from '@utils/hooks';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import Button from '@components/commons/Button';
import axios from 'axios';
const styles = StyleSheet.create({
    ...common,
    ...flexbox,
    ...spacing,
    ...login,
    ...container,
    ...button,
});
const DetailSchedule: IDetailScheduleScreen<IDetailScheduleScreenProps> = (props) => {
    const { navigation } = props;
    const { detailSchedule, locale } = useSelector((states: ReduxStates) => states);
    const [state, setState] = useState({
        DiaChi: '',
        MaBaoTri: 0,
        MaKhachHang: 0,
        MaNhanVien: 0,
        MaThietBi: 0,
        MoTa: '',
        NgayBatDau: '',
        NgayHoanThanh: '',
        NgayKetThuc: '',
        NoiDung: '',
        TenPhuong: '',
        TenQuan: '',
        TenTP: '',
        TenThietBi: '',
        TienDo: '',
        TieuDe: '',
        TrangThai: '',
        htkh: '',
        htnv: '',
        MaBinhLuan: '',
        DienThoai: '',
    });
    const {
        MaBaoTri,
        TenPhuong,
        TenQuan,
        TenTP,
        TieuDe,
        MoTa,
        htnv,
        htkh,
        TenThietBi,
        TienDo,
        DiaChi,
        NgayBatDau,
        NgayKetThuc,
        NgayHoanThanh,
        TrangThai,
        MaBinhLuan,
        NoiDung,
        DienThoai,
    } = state;

    const trans = useTrans();

    const showToast = () => {
        ToastAndroid.show('Bạn đã cập nhật thành công !', ToastAndroid.LONG);
    };
    useEffect(() => {
        setState(props.route.params.data[props.route.params.index]);
    }, []);
    const stringToDate = (string: string) => {
        let year = Number(string.substring(0, 4));
        let month = Number(string.substring(5, 7));
        let day = Number(string.substring(8, 10));
        return ((day < 10 ? '0' : '') + (day + 1) + '/' + (month < 10 ? '0' : '') + month + '/' + year).toString();
    };
    const handleChangeData = (field: string, value: string | number | boolean) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    
    const handleUpdate = () => {
        let url = api.API_URL + '/baotriKH/update';
        axios
            .put(url, {
                mabinhluan: MaBinhLuan,
                noidung: NoiDung,
            })
            .then((response) => {
                showToast();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleBack = () => {
        props.route.params.onGoBack();
        navigation?.goBack();
    };
    return (
        <>
            <ScrollView style={[styles.dFlex1]} contentContainerStyle={[styles.container]} showsVerticalScrollIndicator={false}>
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.MaBaoTri}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={MaBaoTri.toString()}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.TieuDe}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={TieuDe}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.MoTa}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray, { height: 'auto' }]}
                    value={MoTa}
                    selectTextOnFocus={false}
                    multiline={true}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.ThietBi}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={TenThietBi}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.NhanVien}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={htnv}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    Số điện thoại
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={DienThoai}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.KhachHang}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={htkh}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.DiaChi}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray, { height: 'auto' }]}
                    value={DiaChi +', ' + TenPhuong + ', ' + TenQuan +', '+ TenTP}
                    multiline={true}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.NgayBatDau}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={NgayBatDau ? stringToDate(NgayBatDau) : ''}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.NgayKetThuc}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={NgayKetThuc ? stringToDate(NgayKetThuc) : ''}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.NgayHoanThanh}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={NgayHoanThanh ? stringToDate(NgayHoanThanh) : ''}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.TienDo}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={TienDo}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.TrangThai}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={TrangThai}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.BinhLuan}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.borderBottom_gray, { height: 200 }]}
                    value={NoiDung}
                    multiline={true}
                    onChangeText={(data) => {
                        handleChangeData('NoiDung', data);
                    }}
                    maxLength={128}
                />
                <Button
                    text= "Xác nhận"
                    disabled={props.route.params.chuaduyet}
                    style={[styles.marginTop34]} styleText={[styles.font_size_17]} onPress={handleUpdate.bind(this)}
                />
            </ScrollView>
        </>
    );
};
export default DetailSchedule;
