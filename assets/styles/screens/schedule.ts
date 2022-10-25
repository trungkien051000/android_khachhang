import { themes } from '@utils/constants';
import { StyleSheet } from 'react-native';

const schedule = StyleSheet.create({
    schedule_container: {
        padding: 10,
        marginVertical: 5,
        width: '100%',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: themes.COLOR.BLUE,
    },
});

export default schedule;
