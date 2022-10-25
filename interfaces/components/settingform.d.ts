interface ISettingFormComponentProps extends IBaseCompProps {
    route?: any;
}

interface ISettingFormComponent<P = {}> extends IBaseComp<P> {}

interface ISettingFormComponentState {
    settingData: ISettingDataAPI;
    oldSettingData: ISettingDataAPI;
}
