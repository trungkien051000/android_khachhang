interface IAppComponentProps extends IBaseCompProps {}

interface IAppComponent<P = {}> extends IBaseComp<P> {}

interface IAppComponentState {
    isInit?: boolean;
    settingTimer: number;
}
