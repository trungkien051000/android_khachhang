import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const input = StyleSheet.create({
    input_container: {
        paddingHorizontal: 20,
        borderRadius: 5,
        color: themes.COLOR.BLACK,
        backgroundColor: themes.COLOR.LIGHT_GRAY,
        width: '100%',
        height: 50,
    },
});

export default input;
