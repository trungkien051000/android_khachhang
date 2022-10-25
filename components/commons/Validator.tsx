import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';

import TextView from '@components/commons/TextView';

import { common, spacing } from '@assets/styles';
const styles = StyleSheet.create({
    ...common,
    ...spacing,
});

const Validator = forwardRef<IValidatorComponentHandle, IValidatorComponentProps>((props, ref) => {
    const { children, style, inputRef } = props;
    const [state, setState] = useState<IValidatorComponentState>({
        message: '',
    });
    const { message } = state;

    useImperativeHandle(ref, () => ({
        onValidateMessage: (mess: string) => {
            if (mess) {
                inputRef?.current?.setNativeProps({ style: styles.border_red });
            } else {
                inputRef?.current?.setNativeProps({ style: styles.border_none });
            }
            setState((prevState) => ({
                ...prevState,
                message: mess,
            }));
        },
    }));

    return (
        <View style={[style]}>
            {children}
            {message ? <TextView style={[styles.marginTop5, styles.color_red]}>{message}</TextView> : <></>}
        </View>
    );
});

Validator.defaultProps = {
    style: {},
};

export default Validator;
