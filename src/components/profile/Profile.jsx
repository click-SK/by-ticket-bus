import React, { useState } from 'react';
import ClientProfile from './client/ClientProfile';
import '../../style/profile.scss'

const Profile = () => {
    return (
        <div className='profile_wrap'>
            <ClientProfile/>
        </div>
    );
};

export default Profile;