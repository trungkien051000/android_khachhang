import { StyleSheet } from 'react-native';

const flexbox = StyleSheet.create({
    dFlex1: {
        flex: 1,
    },
    dFlex2: {
        flex: 2,
    },
    dFlex4: {
        flex: 4,
    },
    dFlex6: {
        flex: 6,
    },
    flexColum: {
        flexDirection: 'column',
    },
    flexRow: {
        flexDirection: 'row',
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    alignItemsEnd: {
        alignItems: 'flex-end',
    },
    alignSelfCenter: {
        alignSelf: 'center',
    },
    alignSelfStart: {
        alignSelf: 'flex-start',
    },
    alignSelfEnd: {
        alignSelf: 'flex-end',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyAround: {
        justifyContent: 'space-around',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    flexColumnReverse: {
        flexDirection: 'column-reverse',
    },
});

export default flexbox;
