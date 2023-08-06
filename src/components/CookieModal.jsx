import React, { useState, useEffect } from 'react';
import '../style/CookieModal.scss';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useTranslation } from "react-i18next";
const CookieModal = () => {
    const [cookieActive, setCookieActive] = useState(true);
    const [time, setTime] = useState(false);
    const cookies = new Cookies();

    const { t } = useTranslation();


    useEffect(() => {
        if (cookies.get('BusCookie')) {
            setCookieActive(false)
        }
    }, [])

    const obj = {
        path: '/',
        maxAge: 9000000,
    }

    const setCookie = () => {
        const hostName = window.location.hostname;
        cookies.set('BusCookie', hostName, obj);
        window.location.reload();
    }

    setTimeout(() => {
        setTime(true)
    },1000)

    return (
        <>
            {time && cookieActive ?
                <div className='cookie_wrap'>
                    <p>{t('This site uses cookies to improve your user experience. Check out ours')} <Link to='/policy'>{t('Cookie policy')}</Link> {t('to learn more.')}</p>
                    <div className='button_block'>
                        <button onClick={() => setCookie()}>{t('Accept')}</button>
                    </div>
                </div>
                :
                ''}
        </>
    );
};

export default CookieModal;