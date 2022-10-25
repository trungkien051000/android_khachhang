
import { common, container, flexbox, spacing } from '@assets/styles';
import Button from '@components/commons/Button';
import Choice from '@components/commons/Choice';
import Input from '@components/commons/Input';
import TextView from '@components/commons/TextView';
import Validator from '@components/commons/Validator';
import { ReduxStates } from '@redux/reducers';
import { api } from '@utils/constants';
import { useTrans } from '@utils/hooks';
import axios from 'axios';
import React, { createRef, useEffect, useState } from 'react';
import { StyleSheet, TextInput, ToastAndroid, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

const styles = StyleSheet.create({
    ...common,
    ...spacing,
    ...flexbox,
    ...container,
});

const SettingForm: ISettingFormComponent<ISettingFormComponentProps> = (props) => {
    const { navigation } = props;

    const trans = useTrans();
    const dispatch = useDispatch();
    const { setting, locale } = useSelector((states: ReduxStates) => states);
    const [state, setState] = useState({
        DiaChi: '',
        DienThoai: '',
        DoanhNghiep: '',
        HoTen: '',
        MaDiaChi: 14,
        MaKhachHang: 2,
        MaPhuong: 3,
        MaQuan: 3,
        MaTP: 1,
        MatKhau: '',
        TaiKhoan: '',
        TenPhuong: '',
        TenQuan: '',
        TenTP: '',
        TenTat: '',
    });
    const { DiaChi, DienThoai, DoanhNghiep, HoTen, TenPhuong, TenQuan, TenTP, TaiKhoan, MatKhau } = state;
    const showToast = () => {
        ToastAndroid.show('Bạn đã cập nhật thành công !', ToastAndroid.LONG);
    };
    const usernameValidatorRef = createRef<IValidatorComponentHandle>();
    const passwordValidatorRef = createRef<IValidatorComponentHandle>();
    const phoneValidatorRef = createRef<IValidatorComponentHandle>();
    const inputUsernameRef = createRef<TextInput>();
    const inputPasswordRef = createRef<TextInput>();
    const inputPhoneRef = createRef<TextInput>();
    useEffect(() => {
        setState(props.route.params.data[0]);
    }, []);
    const handleChangeSettingData = (field: string, value: string | number | boolean) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    const handleUpdate = () => {
        let url = api.API_URL +  '/khachhang/update/' + props.route.params.idKH;
        axios
            .put(url, {
                hoten: HoTen,
                matkhau: MatKhau,
                dienthoai: DienThoai,
                doanhnghiep:DoanhNghiep
            })
            .then((response) => {
                showToast();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <KeyboardAwareScrollView>
            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}>
                {trans.setting.name}
            </TextView>
            <Input
                style={[styles.marginTop8]}
                value={HoTen}
                onChangeText={(data) => {
                    handleChangeSettingData('HoTen', data);
                }}
                maxLength={128}
            />

            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}>
                {trans.setting.username}
            </TextView>
            <Input
                style={[styles.marginTop8, styles.color_gray]}
                value={TaiKhoan}
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
                {trans.setting.password}
            </TextView>
            <Validator ref={passwordValidatorRef} inputRef={inputPasswordRef}>
                <Input
                    ref={inputPasswordRef}
                    style={[styles.marginTop8]}
                    value={MatKhau}
                    onChangeText={(data) => {
                        handleChangeSettingData('MatKhau', data);
                    }}
                    secureTextEntry={true}
                    maxLength={128}
                />
            </Validator>

            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}>
                {trans.setting.shop}
            </TextView>
            <Input
                style={[styles.marginTop8]}
                value={DoanhNghiep}
                onChangeText={(data) => {
                    handleChangeSettingData('DoanhNghiep', data);
                }}
                maxLength={128}
            />

            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}>
                {trans.setting.address}
            </TextView>
            <Input
                style={[styles.marginTop8, styles.color_gray, {height: 'auto'}]}
                value={DiaChi + ', ' + TenPhuong + ', ' + TenQuan + ', ' + TenTP}
                selectTextOnFocus={false}
                editable={false}
                maxLength={128}
                multiline={true}
            />

            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}>
                {trans.setting.phone}
            </TextView>
            <Input
                style={[styles.marginTop8]}
                value={DienThoai}
                keyboardType="numeric"
                onChangeText={(data) => {
                    handleChangeSettingData('phone', data.replace(/[^0-9]/g, ''));
                }}
                maxLength={128}
            />
            <Button text={trans.setting.save} style={[styles.marginTop34]} styleText={[styles.font_size_17]} onPress={handleUpdate.bind(this)} />
        </KeyboardAwareScrollView>
    );
};

export default SettingForm;
