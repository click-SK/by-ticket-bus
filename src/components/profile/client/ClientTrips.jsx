import React from 'react';
import ClientPlaceholder from './ClientPlaceholder';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
const ClientTrips = () => {
    const { t } = useTranslation();
    return (
        <div className='trips_wrap'>
            <ClientPlaceholder/>
            <h3>{t('You have no upcoming trips.')}</h3>
            <p>{t('Go ahead and explore the world')}!</p>
            <Link to='/'><button className='btn_prime'>{t('New search')}</button> </Link>
        </div>
    );
};

export default ClientTrips;