import React from 'react';
import { TextProps as TextProperties } from 'react-native';

interface ITextViewComponentProps extends TextProperties {
    children?: React.ReactNode;
    text?: string;
}

interface ITextViewComponent<P = {}> extends IBaseComp<P> {}
