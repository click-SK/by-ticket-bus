import React, { useEffect, useState } from 'react';

const Ernings = ({img, title, sum}) => {
    return (
        <div className='ernings_wraper'>
            <div className='ernings_wraper-item admin_panel_items'>
                <img src={img} alt="" />
                <div className='ernings_wraper-content'>
                    <h5 className='content_title'>{title}</h5>
                    <p className='curent_sum'>{sum}</p>
                </div> 
            </div>
        </div>
    );
};

export default Ernings;