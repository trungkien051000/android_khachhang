interface IToastReduxData {
    isShow: boolean;
    status?: 'success' | 'error';
    message?: string;
}

interface IToastReduxAction {
    type: string;
    data: IToastReduxData;
}
