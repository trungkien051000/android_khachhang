import { common, flexbox, signup, spacing } from '@assets/styles';
import Button from '@components/commons/Button';
import Input from '@components/commons/Input';
import Validator from '@components/commons/Validator';
import { images, routes, api } from '@utils/constants';
import { validateHelper, objectHelper } from '@utils/helpers';
import { useTrans } from '@utils/hooks';
import React, { createRef, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
    ...common,
    ...flexbox,
    ...spacing,
    ...signup,
});
const SignUpForm: ISignUpFormComponent<ISignUpFormComponentProps> = (props) => {
    const { navigation } = props;
    const trans = useTrans();

    const [state, setState] = useState<ISignUpFormComponentState>({
        username: '',
        password: '',
        passwordconfirm: '',
    });
    const { username, password, passwordconfirm } = state;
    const usernameValidatorRef = createRef<IValidatorComponentHandle>();
    const passwordValidatorRef = createRef<IValidatorComponentHandle>();
    const passwordConfirmValidatorRef = createRef<IValidatorComponentHandle>();

    const checkSignUp = () => {
        let isValidate = true;
        if (username === '') {
            usernameValidatorRef.current?.onValidateMessage(trans.signup.err_inputUsername);
            isValidate = false;
        } else if (!validateHelper.isUser(username)) {
            usernameValidatorRef.current?.onValidateMessage(trans.signup.err_formatUsername);
            isValidate = false;
        } else {
            usernameValidatorRef.current?.onValidateMessage('');
        }

        if (!password) {
            passwordValidatorRef.current?.onValidateMessage(trans.signup.err_inputPassword);
            isValidate = false;
        } else if (!validateHelper.isPassword(password)) {
            passwordValidatorRef.current?.onValidateMessage(trans.signup.err_formatPassword);
            isValidate = false;
        } else {
            passwordValidatorRef.current?.onValidateMessage('');
        }
        if (isValidate) {
            navigation?.navigate(routes.CLIENT.SCHEDULE);
        }

        if (!passwordconfirm) {
            passwordConfirmValidatorRef.current?.onValidateMessage(trans.signup.err_inputPassword);
            isValidate = false;
        } else if (passwordconfirm !== password) {
            passwordConfirmValidatorRef.current?.onValidateMessage(trans.signup.err_formatPasswordConfirm);
            isValidate = false;
        } else {
            passwordConfirmValidatorRef.current?.onValidateMessage('');
        }
        if (isValidate) {
            navigation?.navigate(routes.CLIENT.SCHEDULE);
        }
    };

    const handleChangeData = (field: string, value: string | number | boolean) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    return (
        <View style={[styles.dFlex1, styles.background_white, styles.border_Radius10, styles.padding10]}>
            <KeyboardAwareScrollView>
                <View style={[styles.dFlex4, styles.marginVertical15]}>
                    <View style={[styles.dFlex1, styles.justifyCenter, styles.alignItemsCenter, styles.margin15]}>
                        <Text style={[styles.font_size_30, styles.font_weight_bold]}>{trans.signup.signup}</Text>
                    </View>

                    {/* body */}
                    <View style={[styles.dFlex2, styles.marginTop20]}>
                        <Validator ref={usernameValidatorRef}>
                            <View>
                                <Text>{trans.signup.username}</Text>
                                <View style={[styles.flexRow, styles.borderBottom_gray]}>
                                    <View style={[styles.justifyCenter, styles.alignItemsCenter]}>
                                        <Image source={images.ICON_USER} />
                                    </View>
                                    <Input
                                        style={[styles.signup_input]}
                                        placeholder={trans.signup.inputname}
                                        value={username}
                                        onChangeText={(data) => {
                                            handleChangeData('username', data);
                                        }}
                                    />
                                </View>
                            </View>
                        </Validator>
                        <Validator ref={passwordValidatorRef}>
                            <View style={[styles.marginTop15]}>
                                <Text>{trans.signup.password}</Text>
                                <View style={[styles.flexRow, styles.borderBottom_gray]}>
                                    <View style={[styles.justifyCenter, styles.alignItemsCenter]}>
                                        <Image source={images.ICON_PASSWORD} />
                                    </View>
                                    <Input
                                        placeholder={trans.signup.inputpassword}
                                        style={[styles.signup_input]}
                                        value={password}
                                        onChangeText={(data) => {
                                            handleChangeData('password', data);
                                        }}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                        </Validator>

                        <Validator ref={passwordConfirmValidatorRef}>
                            <View style={[styles.marginTop15]}>
                                <Text>{trans.signup.passwordconfirm}</Text>
                                <View style={[styles.flexRow, styles.borderBottom_gray]}>
                                    <View style={[styles.justifyCenter, styles.alignItemsCenter]}>
                                        <Image source={images.ICON_PASSWORD} />
                                    </View>
                                    <Input
                                        placeholder={trans.signup.inputpasswordconfirm}
                                        style={[styles.signup_input]}
                                        value={passwordconfirm}
                                        onChangeText={(data) => {
                                            handleChangeData('passwordconfirm', data);
                                        }}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                        </Validator>
                    </View>
                    <View>
                        <Button
                            style={[styles.marginTop34]}
                            styleText={[styles.font_size_17]}
                            text={trans.signup.signup}
                            onPress={checkSignUp}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default SignUpForm;
