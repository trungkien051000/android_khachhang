import { combineReducers } from 'redux';
import { loaderReducer } from './api';
import {
    localeReducer,
    modalReducer,
    toastReducer,
    settingReducer,
    detailScheduleReducer,
    navbarSubmitReducer,
    navbarBackReducer,
    navbarMenuReducer,
} from './common';

const rootReducers = combineReducers({
    loader: loaderReducer,
    locale: localeReducer,
    modal: modalReducer,
    toast: toastReducer,
    setting: settingReducer,
    detailSchedule: detailScheduleReducer,
    navbarSubmit: navbarSubmitReducer,
    navbarBack: navbarBackReducer,
    navbarMenu: navbarMenuReducer,
});
export type ReduxStates = ReturnType<typeof rootReducers>;
export default rootReducers;
