import React from 'react';
import { Text } from 'react-native';

import { ITextViewComponent, ITextViewComponentProps } from '@interfaces/components/textview';

const TextView: ITextViewComponent<ITextViewComponentProps> = (props) => {
    const { children, text, ...rest } = props;
    const content = text || children;

    return (
        <Text {...rest} allowFontScaling={false}>
            {content}
        </Text>
    );
};

TextView.defaultProps = {
    text: '',
};

export default TextView;
