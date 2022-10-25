import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const fontSize = {
    font_size_13: {
        fontSize: themes.FONT.SIZE_13,
        lineHeight: themes.FONT.SIZE_13 + 4,
    },
    font_size_14: {
        fontSize: themes.FONT.SIZE_14,
        lineHeight: themes.FONT.SIZE_14 + 4,
    },
    font_size_15: {
        fontSize: themes.FONT.SIZE_15,
        lineHeight: themes.FONT.SIZE_15 + 4,
    },
    font_size_16: {
        fontSize: themes.FONT.SIZE_16,
        lineHeight: themes.FONT.SIZE_16 + 4,
    },
    font_size_17: {
        fontSize: themes.FONT.SIZE_17,
        lineHeight: themes.FONT.SIZE_17 + 4,
    },
    font_size_18: {
        fontSize: themes.FONT.SIZE_18,
        lineHeight: themes.FONT.SIZE_18 + 4,
    },
    font_size_19: {
        fontSize: themes.FONT.SIZE_19,
        lineHeight: themes.FONT.SIZE_19 + 4,
    },
    font_size_20: {
        fontSize: themes.FONT.SIZE_20,
        lineHeight: themes.FONT.SIZE_20 + 4,
    },
    font_size_21: {
        fontSize: themes.FONT.SIZE_21,
        lineHeight: themes.FONT.SIZE_21 + 4,
    },
    font_size_22: {
        fontSize: themes.FONT.SIZE_22,
        lineHeight: themes.FONT.SIZE_22 + 4,
    },
    font_size_23: {
        fontSize: themes.FONT.SIZE_23,
        lineHeight: themes.FONT.SIZE_23 + 4,
    },
    font_size_24: {
        fontSize: themes.FONT.SIZE_24,
        lineHeight: themes.FONT.SIZE_24 + 4,
    },
    font_size_27: {
        fontSize: themes.FONT.SIZE_27,
        lineHeight: themes.FONT.SIZE_27 + 4,
    },
    font_size_30: {
        fontSize: themes.FONT.SIZE_30,
        lineHeight: themes.FONT.SIZE_30 + 4,
    },
};

const common = StyleSheet.create({
    ...fontSize,
    font_weight_light: {
        fontWeight: '300',
        fontFamily: themes.FONT.ROBOTO.THIN,
    },
    font_weight_regular: {
        fontWeight: '400',
        fontFamily: themes.FONT.ROBOTO.REGULAR,
    },
    font_weight_bold: {
        fontWeight: '700',
        fontFamily: themes.FONT.ROBOTO.BOLD,
    },
    color_white: {
        color: themes.COLOR.WHITE,
    },
    color_black: {
        color: themes.COLOR.BLACK,
    },
    color_blue: {
        color: themes.COLOR.BLUE,
    },
    color_lightgray: {
        color: themes.COLOR.LIGHT_GRAY,
    },
    color_gray: {
        color: themes.COLOR.GRAY,
    },
    color_red: {
        color: themes.COLOR.RED,
    },
    color_green: {
        color: themes.COLOR.GREEN,
    },
    color_orange: {
        color: themes.COLOR.ORANGE,
    },
    color_transparent: {
        color: themes.COLOR.TRANSPARENT,
    },
    width_25Percent: {
        width: '25%',
    },
    width_30Percent: {
        width: '30%',
    },
    width_40Percent: {
        width: '40%',
    },
    width_50Percent: {
        width: '50%',
    },
    width_55Percent: {
        width: '55%',
    },
    text_center: {
        textAlign: 'center',
    },
    position_absolute: {
        position: 'absolute',
    },
    position_absolute_center: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    end_0: {
        end: 0,
    },
    end_12: {
        end: 12,
    },
    bottom_2: {
        bottom: 2,
    },
    position_left: {
        left: 0,
    },
    border_red: {
        borderColor: themes.COLOR.RED,
        borderWidth: 3,
    },
    borderBottom_gray: {
        borderBottomColor: themes.COLOR.DARK_GRAY,
        borderBottomWidth: 1,
    },
    borderBottom_red: {
        borderBottomColor: themes.COLOR.RED,
        borderBottomWidth: 1,
    },
    border_none: {
        borderWidth: 0,
    },
    background_none: {
        backgroundColor: 'transparent',
    },
    background_white: {
        backgroundColor: themes.COLOR.WHITE,
    },
    background_blue: {
        backgroundColor: themes.COLOR.BLUE,
    },
    background_red: {
        backgroundColor: themes.COLOR.RED,
    },
    border_Radius10: {
        borderRadius: 10,
    },
});

export default common;
