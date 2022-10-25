import { regex } from '@utils/constants';

export const isEmail = (value: string) => {
    if (regex.RULE.EMAIL.test(value)) {
        return true;
    }

    return false;
};

export const isUser = (value: string) => {
    if (regex.RULE.USER.test(value)) {
        return true;
    }
    return false;
};

export const isPassword = (value: string) => {
    if (regex.RULE.PASS.test(value)) {
        return true;
    }
    return false;
};

export const isEmpty = (value: string) => {
    if (!value) {
        return true;
    }

    return false;
};
