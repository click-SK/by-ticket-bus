import React from 'react';

const TripItem = ({item}) => {

    //         date: '17.09.2023',
    //         from: 'City1',
    //         to: 'City2',
    //         price: '100$',
    //         timeStart: "8:00",
    //         timeEnd: '16:00',
    //         driver: [
    //             'Name1',
    //             'Name2'
    //         ],   

    console.log('item', item);

    return (
        <div className='trip_one-wrap list_item_wrap'>
            <div className='trip-one-header'>
                {/* <p>{item.date}</p> */}
                <p>31.12.2023</p>
                <p>{item.from}</p>
                <p>{item.to}</p>
                <p>{item.timeFrom} - {item.timeTo}</p>
            </div>
            <div className='trip-one-footer'>
                {/* <p>{item.price}</p> */}
                <div className='trip-one-footer-pdf-price'>
                <p className='seat-number'>Seat: {item.seatNumber}</p>
                </div>
                <div className='trip-one-footer-pdf-price'>
                <p className='trip-one-footer-print'>Print</p>
                <p className='trip-one-footer-download'>Download</p>
                <p className='trip-one-footer-price'>30$</p>
                </div>
            </div>
        </div>
    );
};

export default TripItem;