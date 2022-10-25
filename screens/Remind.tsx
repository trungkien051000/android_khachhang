import React from 'react';
import { Text } from 'react-native';

import { useTrans } from '@utils/hooks';

const Remind: IRemindScreen<IRemindScreenProps> = () => {
    const trans = useTrans();

    return <Text>{trans.remind.title}</Text>;
};

export default Remind;
