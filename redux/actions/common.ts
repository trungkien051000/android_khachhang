import { SET_LOCALE, SET_MODAL, SET_NAVBAR_BACK, SET_NAVBAR_SUBMIT, SET_TOAST, SET_NAVBAR_MENU } from '@redux/actions/type';
import i18n from 'i18n-js';

// Action set active locale
export const setLocale = (data: string = 'vi') => {
    i18n.locale = data;
    return {
        type: SET_LOCALE,
        data,
    };
};

export const setModal = (data: IModalReduxData = { isShow: false }) => {
    return {
        type: SET_MODAL,
        data,
    };
};

export const setToast = (data: IToastReduxData = { isShow: false }) => {
    return {
        type: SET_TOAST,
        data,
    };
};

export const setNavbarSubmit = (data: boolean = false) => {
    return {
        type: SET_NAVBAR_SUBMIT,
        data,
    };
};

export const setNavbarBack = (data: boolean = false) => {
    return {
        type: SET_NAVBAR_BACK,
        data,
    };
};

export const setNavbarMenu = (data: boolean = false) => {
    return {
        type: SET_NAVBAR_MENU,
        data,
    };
};
