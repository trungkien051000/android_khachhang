import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';

import Button from '@components/commons/Button';
import Modal from '@components/layouts/Modal';
import Loader from '@components/layouts/Loader';
import TextView from '@components/commons/TextView';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxStates } from '@redux/reducers';
import { setNavbarSubmit, setNavbarBack } from '@redux/actions';

import { images, routes } from '@utils/constants';

import { common, flexbox, navbar, spacing } from '@assets/styles';
const styles = StyleSheet.create({
    ...flexbox,
    ...common,
    ...spacing,
    ...navbar,
});

const Navbar: INavbarComponent<INavbarComponentProps> = (props) => {
    const dispatch = useDispatch();
    const { setting } = useSelector((states: ReduxStates) => states);
    const { isShowStatus, isShowSetting, isShowBack, isSubmitLimit, isHandleBack, title, submitText, navigation } = props;

    const handleNavbarBack = () => {
        navigation?.goBack();
    };

    return (
        <SafeAreaView>
            <Modal />
            <Loader />
            <ImageBackground source={images.ICON_NAVBAR_BG} style={[styles.navbar_wrapper]}>
                <View style={[styles.navbar_container, styles.flexRow, styles.alignItemsEnd]}>
                    {isShowBack && (
                        <Button
                            icon={images.ICON_ARROW}
                            style={[styles.navbar_icon_back, styles.marginLeft12]}
                            styleIcon={[styles.navbar_icon, styles.alignItemsEnd]}
                            onPress={() => handleNavbarBack()}
                            hitSlop={styles.navbar_hit_slop}
                        />
                    )}
                    <View style={[styles.position_absolute_center, styles.alignItemsCenter, styles.justifyEnd, styles.marginTop5]}>
                        <TextView style={[styles.color_white, styles.font_size_24, styles.font_weight_bold]}>{title}</TextView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

Navbar.defaultProps = {
    isShowBack: true,
};

export default Navbar;
