import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const container = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: themes.COLOR.WHITE,
        fontWeight: '400',
        fontFamily: themes.FONT.ROBOTO.REGULAR,
        flexGrow: 1,
    },
    container_landscape: {
        padding: 20,
        backgroundColor: themes.COLOR.WHITE,
        fontWeight: '400',
        fontFamily: themes.FONT.ROBOTO.REGULAR,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default container;
