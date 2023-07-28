import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registration } from '../../../store/authAdministration';
const ManagerForm = () => {
    const [managerFirstName, setManagerFirstName] = useState('')
    const [managerLastName, setManagerLastName] = useState('')
    const [managerPassword, setManagerPassword] = useState('')
    const [managerLogin, setManagerLogin] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegistrationManager = async () => {
        const data = await dispatch(registration({login: managerLogin, password: managerPassword, firstName: managerFirstName, lastName: managerLastName}));
        if('user' in data.payload) {
          alert('A new manager has been added')
          setManagerFirstName('');
          setManagerLastName('');
          setManagerPassword('');
          setManagerLogin('');
        }
    }
    return (
        <>
            <div className='add_user-content'>
                    <div className='add_user-input'>
                        <label htmlFor="first_name">First Name</label>
                        <input id='first_name' type="text" value={managerFirstName} onChange={(e) => setManagerFirstName(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="lust_name">Lust Name</label>
                        <input id='lust_name' type="text" value={managerLastName} onChange={(e) => setManagerLastName(e.target.value)}  />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="login">Login</label>
                        <input id='login' type="email" value={managerLogin} onChange={(e) => setManagerLogin(e.target.value)}  />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="password">Pasword</label>
                        <input id='password' type="password" value={managerPassword} onChange={(e) => setManagerPassword(e.target.value)} />
                    </div>
                    <button className='btn-save add_user_button' onClick={handleRegistrationManager}>Save</button>
                </div>
        </>
    );
};

export default ManagerForm;