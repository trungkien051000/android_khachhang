interface IButtonComponentProps extends IBaseCompProps {
    disabled?: boolean;
    style?: object;
    styleText?: object;
    styleIcon?: object;
    text?: string;
    icon?: any;
    iconResizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    onPress?: () => void;
    hitSlop?: object;
}

interface IButtonComponent<P = {}> extends IBaseComp<P> {}
