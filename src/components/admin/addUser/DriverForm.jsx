import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../http/baseUrl';
import axios from 'axios';
import { useTranslation } from "react-i18next";
const DriverForm = () => {
    const [driverName, setDriverName] = useState('')
    const [driverEmail, setDriverEmail] = useState('')
    const [driverPassword, setDriverPassword] = useState('')
    const [driverLogin, setDriverLogin] = useState('')
    const [driverPassport, setDriverPassport] = useState('')
    const [driverLicense, setDriverLicense] = useState('')
    const [driverPhone, setDriverPhone] = useState('')
    const [driverAddress, setDriverAddress] = useState('')
    const { t } = useTranslation();

    const handleRegisterDriver = async () => {
        try {
            const {data} = await axios.post(`${API_URL}/register-driver`,{
                fullName: driverName,
                login: driverLogin,
                email: driverEmail,
                phone: driverPhone,
                password: driverPassword,
                license: driverLicense,
                address: driverAddress,
            })
    
            if('fullName' in data) {
                alert('A new driver has been added')
                setDriverName('');
                setDriverEmail('');
                setDriverPassword('');
                setDriverLogin('');
                setDriverLicense('');
                setDriverPhone('');
                setDriverAddress('');
              }
        } catch(e) {
            console.log(e);
        }
    }

    return (
<>
            <div className='add_user-content'>
                    <div className='add_user-input'>
                        <label htmlFor="name">{t('Full name')}</label>
                        <input id='name' type="text" value={driverName} onChange={(e) => setDriverName(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="phone">{t('Phone')}</label>
                        <input id='phone' type="text" value={driverPhone} onChange={(e) => setDriverPhone(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="login">{t('Login')}</label>
                        <input id='login' type="text"  value={driverLogin} onChange={(e) => setDriverLogin(e.target.value)}  />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="email">{t('Email')}</label>
                        <input id='email' type="text" placeholder='example@ex.com' value={driverEmail} onChange={(e) => setDriverEmail(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="password">{t('Pasword')}</label>
                        <input id='password' type="password" value={driverPassword} onChange={(e) => setDriverPassword(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="license">{t('License')}</label>
                        <input id='license' type="text" value={driverLicense} onChange={(e) => setDriverLicense(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="address">{t('Registration address')}</label>
                        <input id='address' type="text" value={driverAddress} onChange={(e) => setDriverAddress(e.target.value)} />
                    </div>
                    <button className='btn-save add_user_button' onClick={handleRegisterDriver}>{t('Save')}</button>
                </div>
        </>
    );
};

export default DriverForm;