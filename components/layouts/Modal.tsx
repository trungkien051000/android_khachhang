import React from 'react';
import { StyleSheet, View, Modal as ModalRN, TouchableOpacity } from 'react-native';

import Button from '@components/commons/Button';
import TextView from '@components/commons/TextView';

import { useTrans } from '@utils/hooks';

import { useDispatch, useSelector } from 'react-redux';
import { ReduxStates } from '@redux/reducers';
import { setModal } from '@redux/actions';

import { flexbox, spacing, common, modal } from '@assets/styles';
const styles = StyleSheet.create({
    ...flexbox,
    ...spacing,
    ...common,
    ...modal,
});

const Modal: IModalComponent<IModalComponentProps> = () => {
    const trans = useTrans();
    const dispatch = useDispatch();
    const { modal } = useSelector((states: ReduxStates) => states);

    const handleModalShow = () => {
        if (modal.isShow && modal.onClose) {
            modal.onClose();
        }
        dispatch(
            setModal({
                ...modal,
                isShow: !modal.isShow,
                closeOnOutsiteClick: false,
            }),
        );
    };

    if (modal.isShow) {
        return (
            <TouchableOpacity
                style={[
                    {
                        ...styles.modal_wrapper,
                    },
                ]}
                onPress={() => handleModalShow()}
            >
                <ModalRN transparent={true} visible={true}>
                    <View
                        style={[
                            styles.dFlex1,
                            styles.alignItemsCenter,
                            styles.justifyCenter,
                            styles.alignSelfCenter,
                            styles.width_55Percent,
                        ]}
                    >
                        <View style={[styles.modal_container, styles.padding20]}>
                            <View style={[styles.alignItemsCenter, styles.justifyCenter, styles.marginVertical32]}>
                                <TextView style={[styles.text_center, styles.font_size_13, modal.styleText]}>{modal.text}</TextView>
                            </View>
                            <View style={[styles.flexRow, styles.alignItemsCenter, styles.justifyCenter]}>
                                {modal.onPressButton && (
                                    <Button
                                        text={modal.buttonText ?? ''}
                                        style={[styles.modal_button_ok, modal.styleButton]}
                                        onPress={modal.onPressButton}
                                    />
                                )}
                                <Button
                                    text={modal.buttonCancelText ?? ''}
                                    style={[styles.modal_button_cancel, modal.buttonText ? styles.marginLeft20 : {}]}
                                    styleText={[styles.color_black]}
                                    onPress={() => (modal.onPressCancelButton ? modal.onPressCancelButton() : handleModalShow())}
                                />
                            </View>
                        </View>
                    </View>
                </ModalRN>
            </TouchableOpacity>
        );
    }

    return <></>;
};

export default Modal;
