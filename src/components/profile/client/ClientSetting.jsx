import React, {useState, useEffect} from 'react';
import { API_URL } from '../../../http/baseUrl';
import axios from 'axios';
const ClientSetting = ({user}) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        setEmail(user.email);
        setPhone(user.phone);
        setBirthday(user.birthday);
    },[user])

    const handleUpdateUserName = () => {
        axios.patch(`${API_URL}/update-user-contacts`, {id: user._id, email, phone, birthday})
    }
    const handleUpdateUserPassword = () => {
        axios.patch(`${API_URL}/update-user-password`, {id: user._id, currentPassword, newPassword})
    }

    return (
        <div className='client_body_item_wrap'>
            <div className='seting_item_wrap'>
                <h4>Payment Method</h4>
                <p>Any card details you save during checkout will appear here.</p>
            </div>
            <div className='seting_item_wrap'>
                <h4>Billing information</h4>
                <p>Save your address for a faster checkout.</p>
                <button className='btn_prime button_add_payment'>Add address</button>
            </div>
            <div className='seting_item_wrap'>
                <h4>Email address</h4>
                <p>This is where your confirmation email, tickets, and notifications will be sent.</p>
                <input className='input_setting' 
                type="email" 
                placeholder='email curent'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='seting_item_wrap'>
                <h4>Phone number</h4>
                <input className='input_setting' 
                type='phone' 
                placeholder='phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
                <h4>Birthday</h4>
                <input className='input_setting' 
                type="text" 
                placeholder='24.05.1996'
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <button className='btn_prime button_add_payment' onClick={handleUpdateUserName}>Update</button>
            <div className='seting_item_wrap'>
                <h4>Update password</h4>
                <p>Enter both fields to update your password</p>
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
            <button className='btn_prime button_add_payment' onClick={handleUpdateUserPassword}>Save</button>
            
        </div>
    );
};

export default ClientSetting;