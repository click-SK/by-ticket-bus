import React from 'react';
import AvailableSvg from './AvailableSvg';
import PaymentSvg from './PaymentSvg';
import RoadMapSvg from './RoadMapSvg';
import BusTiketsSvg from './BusTiketsSvg';
import '../../../style/infoSection.scss'
const InfoSection = () => {

    const arrIcon = [
        {
            icon: <AvailableSvg/>,
            title: 'Always available',
            text: 'Possibility to buy without queues and at any time'
        },
        {
            icon: <PaymentSvg/>,
            title: 'Secure payment',
            text: 'Online payment or pay when boarding the bus'
        },
        {
            icon: <RoadMapSvg/>,
            title: 'More than 100 routes',
            text: 'Choose any available route and open a new one'
        },
        {
            icon: <BusTiketsSvg/>,
            title: 'Refund of tickets',
            text: 'Easy exchange and return of tickets through the app'
        },
    ]
    return (
        <div className='info_section_wrap'>
            {/* <h2>How it work</h2> */}
            <div className='content_wrap' >

                {arrIcon.map((item,idx) => (
                    <div key={idx} className='info_item'>
                        <h3 className='info_item-title'>{item.title}</h3>
                            {item.icon}
                        <p className='info_item-text'>{item.text}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default InfoSection;