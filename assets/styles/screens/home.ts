import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const home = StyleSheet.create({
    home_button: {
        height: 116,
        backgroundColor: themes.COLOR.BLUE,
        borderWidth: 1,
        borderColor: themes.COLOR.BORDER,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 20,
    },
});

export default home;
