import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const loader = StyleSheet.create({
    loader_wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
        backgroundColor: themes.COLOR.BLACK,
        opacity: 0.5,
    },
});

export default loader;
