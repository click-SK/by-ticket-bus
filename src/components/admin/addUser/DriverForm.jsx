import React, { useEffect, useState } from 'react';

const DriverForm = () => {
    const [driverName, setDriverName] = useState('')
    const [driverEmail, setDriverEmail] = useState('')
    const [driverPassword, setDriverPassword] = useState('')
    const [driverLogin, setDriverLogin] = useState('')
    const [driverPassport, setDriverPassport] = useState('')
    const [driverLicense, setDriverLicense] = useState('')
    const [driverPhone, setDriverPhone] = useState('')
    const [driverAddress, setDriverAddress] = useState('')

    return (
<>
            <div className='add_user-content'>
                    <div className='add_user-input'>
                        <label htmlFor="name">Full name</label>
                        <input id='name' type="text" value={driverName} onChange={(e) => setDriverName(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="phone">Phone</label>
                        <input id='phone' type="text" value={driverPhone} onChange={(e) => setDriverPhone(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="login">Login</label>
                        <input id='login' type="text"  value={driverLogin} onChange={(e) => setDriverLogin(e.target.value)}  />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="email">Email</label>
                        <input id='email' type="text" placeholder='example@ex.com' value={driverEmail} onChange={(e) => setDriverEmail(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="password">Pasword</label>
                        <input id='password' type="password" value={driverPassword} onChange={(e) => setDriverPassword(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="license">License</label>
                        <input id='license' type="text" value={driverLicense} onChange={(e) => setDriverLicense(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="address">Registration address</label>
                        <input id='address' type="text" value={driverAddress} onChange={(e) => setDriverAddress(e.target.value)} />
                    </div>
                    <button className='btn-save add_user_button'>Save</button>
                </div>
        </>
    );
};

export default DriverForm;