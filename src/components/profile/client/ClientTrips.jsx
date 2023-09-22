import React, { useEffect, useState } from 'react';
import ClientPlaceholder from './ClientPlaceholder';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import TripAllList from './tripsComponent/TripAllList';
import '../../../style/profileTrips.scss'
const ClientTrips = ({travelHistory}) => {
    const [tripsArr, setTripsArr] = useState([
        {
            date: '17.09.2023',
            from: 'City1',
            to: 'City2',
            price: '100$',
            timeStart: "8:00",
            timeEnd: '16:00',
            driver: [
                'Name1',
                'Name2'
            ],   
        },
        {
            date: '23.10.2023',
            from: 'City1',
            to: 'City2',
            price: '200$',
            timeStart: "17:00",
            timeEnd: '23:00',
            driver: [
                'Name1',
                'Name2'
            ],   
        },
    ])
    const { t } = useTranslation();

    console.log('travelHistory',travelHistory);

    return (
        <div className='trips_wrap'>
            {tripsArr ? 
                <>
                    {tripsArr.length != 0 && 
                    <TripAllList
                    tripsArr={travelHistory}
                    />}
                </>
                :
                <>
                    <ClientPlaceholder/>
                    <h3>{t('You have no upcoming trips.')}</h3>
                    <p>{t('Go ahead and explore the world')}!</p>
                    <Link to='/'><button className='btn_prime'>{t('New search')}</button> </Link>
                </>
            }
        </div>
    );
};

export default ClientTrips;