interface ILoginFormComponentProps extends IBaseCompProps {}

interface ILoginFormComponent<P = {}> extends IBaseComp<P> {}

interface ILoginFormComponentState {
    username: string;
    password: string;
}
