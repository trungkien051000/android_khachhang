import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';

import { Book, DetailSchedule, Home, Login, Schedule,Schedule1,Schedule2, Setting } from '@screens/index';

import { routes } from '@utils/constants';
import { useTrans } from '@utils/hooks';
import Navbar from '@components/layouts/Navbar';

const RootApp = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const RouteApp: IRouteAppComponent<IRouteAppComponentProps> = ({ startScreen }) => {
    const trans = useTrans();
    const multiSchedule = () => {
        return (
        <Tab.Navigator>
            <Tab.Screen name={routes.CLIENT.SCHEDULE}  options={{ tabBarLabel: 'Đã duyệt' }} component={Schedule} />
            <Tab.Screen name={routes.CLIENT.SCHEDULE1}  options={{ tabBarLabel: 'Chưa duyệt' }} component={Schedule1} />
            <Tab.Screen name={routes.CLIENT.SCHEDULE2}  options={{ tabBarLabel: 'Hoàn thành' }} component={Schedule2} />
        </Tab.Navigator>
        );
    };
    return (
        <RootApp.Navigator
            initialRouteName={startScreen}
            screenOptions={{
                cardStyleInterpolator: ({ current, layouts }) => {
                    return {
                        cardStyle: {
                            transform: [
                                {
                                    translateX: current.progress.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [layouts.screen.width, 0],
                                    }),
                                },
                            ],
                        },
                    };
                },
            }}>
            <RootApp.Screen
                name={routes.CLIENT.LOGIN}
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <RootApp.Screen
                name={routes.CLIENT.SETTING}
                component={Setting}
                options={{
                    header: (props) => (
                        <Navbar
                            {...props}
                            title={trans.setting.title}
                            isHandleBack={true}
                        />
                    ),
                }}
            />
            <RootApp.Screen
                name={routes.CLIENT.DETAILSCHEDULE}
                component={DetailSchedule}
                options={{
                    header: (props) => (
                        <Navbar
                            {...props}
                            title={trans.detailSchedule.title}
                            isHandleBack={true}
                        />
                    ),
                }}
            />

            <RootApp.Screen
                name={routes.CLIENT.SCHEDULE}
                component={multiSchedule}
                options={{
                    header: (props) => (
                        <Navbar
                            {...props}
                            title={trans.schedule.title}
                            isHandleBack={true}
                        />
                    ),
                }}
            />

            <RootApp.Screen
                name={routes.CLIENT.BOOK}
                component={Book}
                options={{
                    header: (props) => (
                        <Navbar
                            {...props}
                            title={trans.book.title}
                            isHandleBack={true}
                        />
                    ),
                }}
            />

            <RootApp.Screen
                name={routes.CLIENT.HOME}
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
        </RootApp.Navigator>
    );
};

export default RouteApp;
