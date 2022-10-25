interface IValidatorComponentProps extends IBaseCompProps {
    style?: object;
    inputRef?: React.RefObject<TextInput>;
}

interface IValidatorComponent<P = {}> extends IBaseComp<P> {}

interface IValidatorComponentHandle {
    onValidateMessage: (mess: string) => void;
}

interface IValidatorComponentState {
    message: string;
}
