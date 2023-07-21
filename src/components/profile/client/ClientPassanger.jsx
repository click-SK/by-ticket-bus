import React from 'react';

const ClientPassanger = () => {
    return (
        <div className='client_body_item_wrap'>
                <h3> Account holder</h3>
                <div className='passanger_item'>
                    <p>FIRST NAME LAST NAME</p>
                    <input type="text" placeholder='FIRST NAME' />
                    <input type="text" placeholder='LAST NAME' />
                </div>
                <button className='btn_prime'> Add Passanger</button>
        </div>
    );
};

export default ClientPassanger;