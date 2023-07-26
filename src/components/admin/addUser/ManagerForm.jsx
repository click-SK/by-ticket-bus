import React, { useEffect, useState } from 'react';

const ManagerForm = () => {
    const [managerFirstName, setManagerFirstName] = useState('')
    const [managerLastName, setManagerLastName] = useState('')
    const [managerPassword, setManagerPassword] = useState('')
    const [managerLogin, setManagerLogin] = useState('')
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
                    <button className='btn-save add_user_button'>Save</button>
                </div>
        </>
    );
};

export default ManagerForm;