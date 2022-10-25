interface IDetailScheduleFormComponentProps extends IBaseCompProps {}

interface IDetailScheduleFormComponent<P = {}> extends IBaseComp<P> {}

interface IDetailScheduleFormComponentState {
    detailScheduleData: IDetailScheduleDataAPI;
    oldDetailScheduleData: IDetailScheduleDataAPI;
}
