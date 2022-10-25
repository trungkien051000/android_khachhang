interface IModalReduxData {
    text?: string;
    styleText?: object;
    buttonText?: string;
    buttonCancelText?: string;
    styleButton?: string;
    isShow: boolean;
    closeOnOutsiteClick?: boolean;
    onClose?: () => void;
    onPressButton?: () => void;
    onPressCancelButton?: () => void;
}

interface IModalReduxAction {
    type: string;
    data: IModalReduxData;
}
