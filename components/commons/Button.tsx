import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import TextView from '@components/commons/TextView';

import { button, common, flexbox } from '@assets/styles';
const styles = StyleSheet.create({
    ...button,
    ...common,
    ...flexbox,
});

const Button: IButtonComponent<IButtonComponentProps> = (props) => {
    const { children, disabled, style, styleText, styleIcon, text, icon, onPress, iconResizeMode, hitSlop } = props;

    return (
        <TouchableOpacity
            style={[styles.button_container, styles.flexRow, disabled ? styles.button_disabled : {}, style]}
            disabled={disabled}
            onPress={() => (onPress ? onPress() : {})}
            hitSlop={hitSlop}
        >
            <>
                {icon ? <Image source={icon} style={styleIcon} resizeMode={iconResizeMode ?? 'cover'} /> : <></>}
                {text ? (
                    <TextView
                        style={[
                            styles.color_white,
                            styles.font_weight_bold,
                            styles.font_size_13,
                            disabled ? styles.button_disabled : {},
                            styleText,
                        ]}
                    >
                        {text}
                    </TextView>
                ) : (
                    <></>
                )}
                {children ? children : <></>}
            </>
        </TouchableOpacity>
    );
};

Button.defaultProps = {
    disabled: false,
    style: {},
    styleText: {},
    text: '',
    styleIcon: {},
    icon: {},
    iconResizeMode: 'cover',
    onPress: () => {},
};

export default Button;
