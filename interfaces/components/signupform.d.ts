interface ISignUpFormComponentProps extends IBaseCompProps {}

interface ISignUpFormComponent<P = {}> extends IBaseComp<P> {}

interface ISignUpFormComponentState {
    username: string;
    password: string;
    passwordconfirm: string;
}
