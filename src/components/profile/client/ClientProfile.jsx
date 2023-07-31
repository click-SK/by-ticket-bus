import { React, useState} from 'react';
import ClientPlaceholder from './ClientPlaceholder';
import ClientTrips from './ClientTrips';
import ClientPassanger from './ClientPassanger';
import ClientSetting from './ClientSetting';
import '../../../style/profileClient.scss'

import { BiTrip } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/authUser';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
const ClientProfile = () => {
    const [isTrips, setIsTrips] = useState(true)
    const [isPassengers, setIsPassengers] = useState(false)
    const [isSettings, setIsSettings] = useState(false)
    const [isLogout, setIsLogout] = useState(false)
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.authUser.user);

    const openTrips = () => {
        setIsTrips(true)
        setIsPassengers(false)
        setIsSettings(false)
        setIsLogout(false)
    }
    const openPassengers = () => {
        setIsPassengers(true)
        setIsTrips(false)
        setIsSettings(false)
        setIsLogout(false)
    }
    const openSettings = () => {
        setIsSettings(true)
        setIsPassengers(false)
        setIsTrips(false)
        setIsLogout(false)
    }

    const handelLogoutUser = () => {
        dispatch(logout({accessToken: user.accessToken}));
        navigate('/');
    }

    return (
        <div className='profile_client_wrap'>
            <aside className='aside_menu'>s
                <nav className='nav_bar'>
                    <ul className='nav_list'>
                        <li 
                        onClick={openTrips}
                        className={`list_item ${isTrips ? 'list_item-active' : ''}`}><BiTrip/>{t('Trips')}</li>
                        <li 
                        onClick={openPassengers}
                        className={`list_item ${isPassengers ? 'list_item-active' : ''}`}><AiOutlineUserAdd/>{t('Passengers')}</li>
                        <li 
                        onClick={openSettings}
                        className={`list_item ${isSettings ? 'list_item-active' : ''}`}><CiSettings/>{t('Settings')}</li>
                        <li 
                        className={`list_item`}
                        onClick={handelLogoutUser}><CiLogout/>{t('Log out')}</li>
                    </ul>
                </nav>
            </aside>
            <div className='body_wrapper'>
                {isTrips && 
                    <ClientTrips/>
                }
                {isPassengers && 
                    <ClientPassanger user={user}/>
                }
                {isSettings && 
                    <ClientSetting user={user}/>
                }
            </div>

        </div>
    );
};

export default ClientProfile;