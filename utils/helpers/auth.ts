import AsyncStorage from '@react-native-community/async-storage';

import { authConfig } from '@utils/configs';

export const accessToken = async () => {
    let token = await AsyncStorage.getItem(authConfig.COOKIE_KEY);
    if (token) {
        return `Bearer ${token}`;
    }
    return '';
};

export const setAccessToken = async (accessToken: string) => {
    await AsyncStorage.setItem(authConfig.COOKIE_KEY, accessToken);
};

export const isAuth = async () => {
    return Boolean(await accessToken());
};

export const logOut = async () => {
    await AsyncStorage.removeItem(authConfig.COOKIE_KEY);
};
