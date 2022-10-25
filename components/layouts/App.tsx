import React, { useEffect } from 'react';

import Navigation from '@components/navigations/Navigation';

import { useDispatch } from 'react-redux';
import { setLocale } from '@redux/actions';

const App: IAppComponent<IAppComponentProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setLanguage('vi');
    }, []);

    const setLanguage = (locale: string) => {
        dispatch(setLocale(locale));
    };

    return <Navigation />;
};

export default App;
