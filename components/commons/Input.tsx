import React, { forwardRef, useEffect } from 'react';
import { TextInput, StyleSheet, Keyboard } from 'react-native';

import { themes } from '@utils/constants';

import { input, common } from '@assets/styles';
const styles = StyleSheet.create({
    ...input,
    ...common,
});

const Input = forwardRef<TextInput, IInputComponentProps>((props, ref) => {
    const { style, onChangeText, onSubmitEditing, onBlur, returnKeyType, keyboardType, value } = props;

    useEffect(() => {
        const hideKeyboardListener = Keyboard.addListener('keyboardDidHide', () => handleBlur());

        return () => {
            hideKeyboardListener.remove();
        };
    }, []);

    const handleDataChange = (text: string) => {
        if (onChangeText) {
            if (text === '') {
                onChangeText('');
            } else {
                onChangeText(text);
            }
        }
    };

    const handleBlur = () => {
        if (onBlur) {
            onBlur();
        }
    };

    const handleTrimData = () => {
        if (onChangeText && value) {
            onChangeText(value.trim());
        }
    };

    return (
        <TextInput
            ref={ref}
            {...props}
            style={[styles.input_container, styles.font_size_17, style]}
            placeholderTextColor={themes.COLOR.DARK_GRAY}
            selectionColor={themes.COLOR.DARK_GRAY}
            onChangeText={(text: string) => handleDataChange(text)}
            onSubmitEditing={() => (onSubmitEditing ? onSubmitEditing() : {})}
            onEndEditing={() => handleTrimData()}
            returnKeyType={returnKeyType ?? 'default'}
            keyboardType={keyboardType ?? 'default'}
            disableFullscreenUI={true}
            autoCapitalize="none"
            allowFontScaling={false}
        />
    );
});

Input.defaultProps = {
    value: '',
    style: {},
    placeholder: '',
    onChangeText: () => {},
    onSubmitEditing: () => {},
    onBlur: () => {},
    returnKeyType: 'default',
    keyboardType: 'default',
    secureTextEntry: false,
    type: 'text',
};

export default Input;
