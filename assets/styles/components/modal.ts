import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const modal = StyleSheet.create({
    modal_wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
        backgroundColor: themes.COLOR.BLACK,
        opacity: 0.5,
    },
    modal_container: {
        borderRadius: 12,
        backgroundColor: themes.COLOR.WHITE,
        width: '89%',
    },
    modal_button_ok: {
        flex: 0.5,
        backgroundColor: themes.COLOR.BLUE,
    },
    modal_button_cancel: {
        flex: 0.5,
    },
});

export default modal;
