import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const login = StyleSheet.create({
    login_input: {
        color: themes.COLOR.BLACK,
        backgroundColor: themes.COLOR.WHITE,
        width: '90%',
        height: 50,
    },
});

export default login;
