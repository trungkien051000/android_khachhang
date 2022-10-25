import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const button = StyleSheet.create({
    button_container: {
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: themes.COLOR.BLUE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_disabled: {
        opacity: 0.5,
    },
    button_save: {
        borderWidth: 2,
        borderColor: themes.COLOR.WHITE,
        backgroundColor: themes.COLOR.BLUE,
        paddingVertical: 4,
        paddingHorizontal: 11,
    },
});

export default button;
