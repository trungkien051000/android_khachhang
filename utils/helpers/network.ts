import NetInfo from '@react-native-community/netinfo';

export const isConnected = async () => {
    const response = await NetInfo.fetch();
    return response.isConnected;
};
