import React, { useState } from 'react';
import ClientProfile from './client/ClientProfile';
import '../../style/profile.scss'

const Profile = () => {
    const [isClient, setIsClient] = useState(localStorage.getItem('isClient') === 'true'  || false)
    console.log('isClient',isClient);
    return (
        <div className='profile_wrap'>
            {isClient ? 
            <ClientProfile/>
            :
            <h1>HELLO</h1>
            }
        </div>
    );
};

export default Profile;