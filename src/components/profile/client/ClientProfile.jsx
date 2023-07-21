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

const ClientProfile = () => {
    const [isTrips, setIsTrips] = useState(true)
    const [isPassengers, setIsPassengers] = useState(false)
    const [isSettings, setIsSettings] = useState(false)
    const [isLogout, setIsLogout] = useState(false)

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

    return (
        <div className='profile_client_wrap'>
            <aside className='aside_menu'>
                <nav className='nav_bar'>
                    <ul className='nav_list'>
                        <li 
                        onClick={openTrips}
                        className={`list_item ${isTrips ? 'list_item-active' : ''}`}><BiTrip/>Trips</li>
                        <li 
                        onClick={openPassengers}
                        className={`list_item ${isPassengers ? 'list_item-active' : ''}`}><AiOutlineUserAdd/>Passengers</li>
                        <li 
                        onClick={openSettings}
                        className={`list_item ${isSettings ? 'list_item-active' : ''}`}><CiSettings/>Settings</li>
                        <li 
                        className={`list_item`}><CiLogout/>Log out</li>
                    </ul>
                </nav>
            </aside>
            <div className='body_wrapper'>
                {isTrips && 
                    <ClientTrips/>
                }
                {isPassengers && 
                    <ClientPassanger/>
                }
                {isSettings && 
                    <ClientSetting/>
                }
            </div>

        </div>
    );
};

export default ClientProfile;