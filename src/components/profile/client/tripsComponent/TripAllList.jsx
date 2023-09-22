import React from 'react';
import TripItem from './TripItem';


const TripAllList = ({tripsArr}) => {

    console.log('tripsArr',tripsArr);
    return (
        <div className='trip_list_wrap'>
            <div className='trip_wrap-header'>
                <h3>Date</h3>
                <h3>From</h3>
                <h3>To</h3>
                <h3>Time</h3>
            </div>
            <div className='trip_list-body'>
                {tripsArr.map((item,idx) => (
                    <TripItem
                    key={idx}
                    item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default TripAllList;