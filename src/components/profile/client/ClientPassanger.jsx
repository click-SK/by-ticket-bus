import React, {useState, useEffect} from 'react';
import { API_URL } from '../../../http/baseUrl';
import axios from 'axios';
import { useTranslation } from "react-i18next";
const ClientPassanger = ({user}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { t } = useTranslation();
    useEffect(() => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
    },[user])

    const handleUpdateUserName = () => {
        axios.patch(`${API_URL}/update-user-name`, {id: user._id, firstName, lastName})
    }
    return (
        <div className='client_body_item_wrap'>
                <h3>{t('Account holder')}</h3>
                <div className='passanger_item'>
                    <p>{t('FIRST NAME LAST NAME')}</p>
                    <input type="text" 
                    placeholder='FIRST NAME'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" 
                    placeholder='LAST NAME'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                </div>
                <button className='btn_prime' onClick={handleUpdateUserName}>{t('Save')}</button>
                <button className='btn_prime'>{t('Add Passenger')}</button>
        </div>
    );
};

export default ClientPassanger;