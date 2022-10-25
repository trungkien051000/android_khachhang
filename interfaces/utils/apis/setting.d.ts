interface ISettingDataAPI {
    name: string;
    username: string;
    password: string;
    shop: string;
    address: string;
    phone: string;
    language: string;
}

interface IGetSettingDetailAPIRes extends IBaseAPIRes {
    results: ISettingDataAPI;
}

interface ISendSettingAPIRes extends IBaseAPIRes {
    results: null;
}
