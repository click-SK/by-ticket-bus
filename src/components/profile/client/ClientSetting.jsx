import React from 'react';

const ClientSetting = () => {
    return (
        <div className='client_body_item_wrap'>
            <div className='seting_item_wrap'>
                <h4>Payment Method</h4>
                <p>Any card details you save during checkout will appear here.</p>
            </div>
            <div className='seting_item_wrap'>
                <h4>Billing information</h4>
                <p>Save your address for a faster checkout.</p>
                <button className='btn-prime'>Add address</button>
            </div>
            <div className='seting_item_wrap'>
                <h4>Email address</h4>
                <p>This is where your confirmation email, tickets, and notifications will be sent.</p>
                <input type="email" placeholder='email curent' />
            </div>
            <div className='seting_item_wrap'>
                <h4>Update password</h4>
                <p>Enter both fields to update your password</p>
                <input type="password" placeholder='Current password' />
                <input type="password" placeholder='New password' />
            </div>
            
        </div>
    );
};

export default ClientSetting;