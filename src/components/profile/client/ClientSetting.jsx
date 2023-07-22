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
                <button className='btn_prime button_add_payment'>Add address</button>
            </div>
            <div className='seting_item_wrap'>
                <h4>Email address</h4>
                <p>This is where your confirmation email, tickets, and notifications will be sent.</p>
                <input className='input_setting' type="email" placeholder='email curent' />
            </div>
            <div className='seting_item_wrap'>
                <h4>Update password</h4>
                <p>Enter both fields to update your password</p>
                <input className='input_setting' type="password" placeholder='Current password' />
                <input className='input_setting' type="password" placeholder='New password' />
            </div>
            <button className='btn_prime button_add_payment'>Save</button>
            
        </div>
    );
};

export default ClientSetting;