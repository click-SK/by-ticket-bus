import React, {useState, useEffect} from 'react';
import { API_URL } from '../../../http/baseUrl';
import axios from 'axios';
import { useTranslation } from "react-i18next";
const ClientSetting = ({user, setReloadUser}) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        setEmail(user?.email);
        setPhone(user?.phone);
        setBirthday(user?.birthday);
    },[user])

    const handleUpdateUserName = () => {
        axios.patch(`${API_URL}/update-user-contacts`, {id: user?._id, email, phone, birthday})
        .then(() => {
            setTimeout(() => {
                setReloadUser((state) => ! state)
            },500)
        })
        .catch((error) => {
            console.error('Request error:', error);
          });
    }
    const handleUpdateUserPassword = () => {
        axios.patch(`${API_URL}/update-user-password`, {id: user?._id, currentPassword, newPassword})
        .then(() => {
            setTimeout(() => {
                setReloadUser((state) => ! state)
            },500)
        })
        .catch((error) => {
            console.error('Request error:', error);
          });
    }

    return (
        <div className='client_body_item_wrap'>
            <div className='seting_item_wrap'>
                <h4>{t('Payment Method')}</h4>
                <p>{t('Any card details you save during checkout will appear here.')}</p>
            </div>
            <div className='seting_item_wrap'>
                <h4>{t('Billing information')}</h4>
                <p>{t('Save your address for a faster checkout.')}</p>
                <button className='btn_prime button_add_payment'>{t('Add address')}</button>
            </div>
            <div className='seting_item_wrap'>
                <h4>{t('Email address')}</h4>
                <p>{t('This is where your confirmation email, tickets, and notifications will be sent.')}</p>
                <input className='input_setting' 
                type="email" 
                placeholder='email curent'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='seting_item_wrap'>
                <h4>{t('Phone number')}</h4>
                <input className='input_setting' 
                type='phone' 
                placeholder='phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
                <h4>{t('Birthday')}</h4>
                <input className='input_setting' 
                type="text" 
                placeholder='24.05.1996'
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <button className='btn_prime button_add_payment' onClick={handleUpdateUserName}>{t('Update')}</button>
            <div className='seting_item_wrap'>
                <h4>{t('Update password')}</h4>
                <p>{t('Enter both fields to update your password')}</p>
                <input className='input_setting' 
                type="password" 
                placeholder='Current password'  
                value={currentPassword} 
                onChange={(e) => setCurrentPassword(e.target.value)}/>
                <input className='input_setting' 
                type="password" 
                placeholder='New password'
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <button className='btn_prime button_add_payment' onClick={handleUpdateUserPassword}>{t('Save')}</button>
            
        </div>
    );
};

export default ClientSetting;