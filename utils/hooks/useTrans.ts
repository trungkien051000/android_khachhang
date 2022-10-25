import i18n from 'i18n-js';

import { en, vi } from '@utils/lang';

import { useSelector } from 'react-redux';
import { ReduxStates } from '@redux/reducers';

const useTrans = () => {
    const { locale } = useSelector((states: ReduxStates) => states);
    i18n.defaultLocale = 'vi';
    i18n.fallbacks = true;

    return locale === 'vi' ? vi : en;
};

export default useTrans;
