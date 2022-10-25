import moment from 'moment';

export const getUTCStringNow = () => {
    return moment().toDate().toISOString();
};

export const formatDate = (date: string, toFormat: string = 'YYYY/MM/DD') => {
    if (date) {
        return moment(date).format(toFormat);
    }

    return '';
};

export const isValid = (date: string, format: string = 'YYYY/MM/DD') => {
    return moment(date, format).isValid();
};
