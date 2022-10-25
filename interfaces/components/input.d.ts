interface IInputComponentProps extends IBaseCompProps {
    style?: object;
    placeholder?: string;
    onChangeText?: (value: string) => void;
    onSubmitEditing?: () => void;
    onBlur?: () => void;
    returnKeyType?: ReturnKeyTypeOptions;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    value?: string;
    multiline?: boolean;
    maxLength?: number;
    type?: 'text' | 'number';
    selectTextOnFocus?: boolean;
    editable?: boolean;
}

interface IInputComponent<P = {}> extends IBaseComp<P> {}
