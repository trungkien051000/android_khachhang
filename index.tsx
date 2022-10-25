import React from 'react';
import { AppRegistry } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import App from '@components/layouts/App';

import { Provider } from 'react-redux';
import { reduxWrapper } from '@redux/store';

import { appConfig } from '@utils/configs';

const MasterLayout: IMasterLayout<IMasterLayoutProps> = () => {
    return (
        <Provider store={reduxWrapper}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appConfig.APP_NAME, () => gestureHandlerRootHOC(MasterLayout));
