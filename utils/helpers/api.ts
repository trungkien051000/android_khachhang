import axios from "axios";
import { routes } from '@utils/constants';

export const login = async () => {};

export const getScheduleDetail = async () => {
    try {
        return await axios.get<IGetDetailScheduleDetailAPIRes>(routes.API.SCHEDULE);
    } catch (err) {
        throw err;
    }
};