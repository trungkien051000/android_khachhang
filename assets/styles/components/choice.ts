import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const choice = StyleSheet.create({
    choice_radioStyle: {
        height: 18,
        width: 18,
        marginTop: 20,
        marginLeft: 32,
        borderRadius: 110,
        borderWidth: 2,
        borderColor: themes.COLOR.BLUE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    choice_radioSelected: {
        width: 11,
        height: 11,
        borderRadius: 55,
        backgroundColor: themes.COLOR.BLUE,
    },
    choice_disabled: {
        opacity: 0.5,
    },
});
export default choice;
