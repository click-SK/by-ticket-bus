import React from 'react';
import SelectRouteSvg from './SelectRouteSvg';
import ByTicketSvg from './ByTicketSvg';
import ReadySvg from './ReadySvg';
import '../../../style/howItWork.scss'
const HowItWork = () => {

    return (
        <div className='how_it_work_wraper'>
            <h2>How it work</h2>
            <div className='content_wrap' >
                <div className='item_how-it-work'>
                    <h3 className='item_h3'> 1. Select a route</h3>
                    <SelectRouteSvg/>
                    <p className='item_text'>Select the means of transport, indicate the point of departure / arrival and the date of trip.</p>
                </div>
                <div className='item_how-it-work'>
                    <h3 className='item_h3'>  2. Buy a ticket</h3>
                    <ByTicketSvg/>
                    <p className='item_text'>Fill in the passenger details, be sure to check the information and pay for the order.</p>
                </div>
                <div className='item_how-it-work'>
                    <h3 className='item_h3'>  3. Redy!</h3>
                    <ReadySvg/>
                    <p className='item_text'>Print or save your ticket. After the trip, we will be glad to get a review from you.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;