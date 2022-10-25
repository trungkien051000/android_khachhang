import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';

import { SET_LOADER } from '@redux/actions/type';

import { apiHelper } from '@utils/helpers';

export const setLoader = (data: boolean = false) => {
    return {
        type: SET_LOADER,
        data,
    };
};

export const fetchScheduleDetail = async (
    callBack?: (result: IGetDetailScheduleDetailAPIRes | IErrorAPIRes | null) => void,
    isLoad: boolean = true,
) => {
    return async (dispatch: Dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }

        try {
            const res = await apiHelper.getScheduleDetail();
            if (callBack) {
                setTimeout(() => {
                    callBack(res?.data);
                }, 1200);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err as AxiosResponse<IErrorAPIRes, AxiosError>;
                if (callBack) {
                    setTimeout(() => {
                        callBack(res?.data);
                    }, 1200);
                }
            }
        }

        if (isLoad) {
            setTimeout(() => {
                dispatch(setLoader(false));
            }, 1200);
        }
    };
};
