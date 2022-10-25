import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

import RouteApp from '@components/navigations/RouteApp';

import { authHelper } from '@utils/helpers';
import { routes, themes } from '@utils/constants';

const Navigation: INavigationComponent<INavigationComponentProps> = () => {
    const [_isAuth, setIsAuth] = useState<boolean>();

    useEffect(() => {
        StatusBar.setBackgroundColor(themes.COLOR.BLUE);
        StatusBar.setBarStyle('light-content', false);
        setTimeout(() => {
            BootSplash.hide({ fade: true });
        }, 2000);
        initAuth();
    }, []);

    const initAuth = async () => {
        const data = await authHelper.isAuth();
        setIsAuth(data);
    };

    return (
        <NavigationContainer>
            <RouteApp startScreen={routes.CLIENT.LOGIN} />
        </NavigationContainer>
    );
};

export default Navigation;
