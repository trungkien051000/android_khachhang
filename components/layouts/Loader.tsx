import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';

import { themes } from '@utils/constants';

import { useSelector } from 'react-redux';
import { ReduxStates } from '@redux/reducers';

import { flexbox, loader } from '@assets/styles';
const styles = StyleSheet.create({
    ...flexbox,
    ...loader,
});

const Loader: ILoaderComponent<ILoaderComponentProps> = () => {
    const { loader } = useSelector((states: ReduxStates) => states);

    if (loader) {
        return (
            <View
                style={[
                    {
                        ...styles.loader_wrapper,
                    },
                ]}
            >
                <View style={[styles.dFlex1, styles.alignItemsCenter, styles.justifyCenter]}>
                    <Spinner type="FadingCircleAlt" color={themes.COLOR.WHITE} size={100} />
                </View>
            </View>
        );
    }

    return <></>;
};

export default Loader;
