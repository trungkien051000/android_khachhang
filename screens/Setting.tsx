import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Image, ToastAndroid } from 'react-native';

import { Button, SettingForm, TextView } from '@components/index';

import { button, common, container, flexbox, login, spacing } from '@assets/styles';
import { images } from '@utils/constants';
import { useTrans } from '@utils/hooks';
const styles = StyleSheet.create({
    ...common,
    ...flexbox,
    ...spacing,
    ...login,
    ...container,
    ...button,
});
const Setting: ISettingScreen<ISettingScreenProps> = (props) => {
    const { navigation } = props;
    const trans = useTrans();
    return (
        <>
            <ScrollView style={[styles.dFlex1]} contentContainerStyle={[styles.container]} showsVerticalScrollIndicator={false}>
                <SettingForm {...props} />
            </ScrollView>
        </>
    );
};

export default Setting;
