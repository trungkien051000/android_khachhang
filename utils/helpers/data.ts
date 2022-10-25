import AsyncStorage from '@react-native-community/async-storage';

import { enums } from '@utils/constants';

export const getSetting = async () => {
    const data = await AsyncStorage.getItem(enums.STORAGE_KEY.SETTING_KEY);
    const setting: ISettingDataAPI = JSON.parse(data ?? 'null') ?? {
        name: 'Bạch Trung Kiên',
        username: 'trungkien',
        password: 'trungkien2000',
        shop: 'Police Coffee',
        address: '80 Lê Lợi, Đà Nẵng',
        phone: '0702763387',
        language: 'vi',
    };
    return setting;
};

export const setSetting = async (setting: string) => {
    await AsyncStorage.setItem(enums.STORAGE_KEY.SETTING_KEY, setting);
};

export const getFirstInstall = async () => {
    const firstInstall = await AsyncStorage.getItem(enums.STORAGE_KEY.FIRST_INSTALL_KEY);
    return JSON.parse(firstInstall ?? 'false');
};

export const setFirstInstall = async (firstInstall: boolean) => {
    await AsyncStorage.setItem(enums.STORAGE_KEY.FIRST_INSTALL_KEY, JSON.stringify(firstInstall));
};
