import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const navbar = StyleSheet.create({
    navbar_wrapper: {
        backgroundColor: themes.COLOR.BLUE,
        paddingVertical: 10,
        paddingHorizontal: 22,
    },
    navbar_container: {
        height: 57,
    },
    navbar_icon: {
        width: 24,
        height: 24,
    },
    navbar_iconWifi: {
        width: 28,
        height: 24,
    },
    navbar_icon_back: {
        width: 0,
        height: 0,
        marginEnd: 25,
    },
    navbar_icon_button: {
        width: 0,
        height: 0,
    },
    navbar_submit_button: {
        borderWidth: 2,
        borderColor: themes.COLOR.WHITE,
        backgroundColor: themes.COLOR.TRANSPARENT,
        paddingVertical: 4,
        paddingHorizontal: 11,
    },
    navbar_hit_slop: {
        top: 10,
        bottom: 10,
        left: 30,
        right: 30,
    },
});

export default navbar;
