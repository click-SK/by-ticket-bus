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

    return (
        <div className='trip_one-wrap list_item_wrap'>
            <div className='trip-one-header'>
                <p>{item.date}</p>
                <p>{item.from}</p>
                <p>{item.to}</p>
                <p>{item.timeStart} - {item.timeEnd}</p>
            </div>
            <div className='trip-one-footer'>
                <p>{item.price}</p>
            </div>
        </div>
    );
};

export default TripItem;