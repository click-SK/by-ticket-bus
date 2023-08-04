import React from 'react';

const TripInformation = () => {
    const amentiArr = [
        'Air conditioning',
        'Toilet',
        'Wifi',
        'Standard seat',
        'Power outlets'
    ]

    const infoArr = [
        {
            title : 'REFUNDS AND EXCHANGES',
            text: 'Outbound and return departures must be cancelled together.Redeemable voucher up to 1hr before outbound departure - 100%. Exchange date or time up to 1hr before departure - free'
        },
        {
            title : 'BOARDING REQUIREMENTS',
            text: 'Booking number and photo ID required. Booking number and ticket delivery by email.'
        },
    ]
    return (
        <div className='trip_info'>
            <div className='amenities'>
                    <h4>Amenities</h4>
                <div className='amen_wrap'> 
                    {amentiArr.map((item,idx) => (
                        <div key={idx} className='amen_item'>{item}</div>
                    ))}
                </div>
            </div>
            <div className='info_trip_diteils'>
                <h4>REFUNDS AND EXCHANGES</h4>
                <p>Outbound and return departures must be cancelled together.
                    Redeemable voucher up to 1hr before outbound departure - 100%
                    Exchange date or time up to 1hr before departure - free</p>
                <h4>BOARDING REQUIREMENTS</h4>
                <p>Booking number and photo ID required</p>
                <p>Booking number and ticket delivery by email</p>
                <h4>LUGGAGE</h4>
                <p>1 carry-on bag</p>
                <p>Max 7kg (15.4lbs) per carry-on bag</p>
                <p>1 checked bag - free</p>
                <p>Max 20kg (44.1lbs) per checked bag</p>
                <p>Max 67cm x 50cm x 27cm (26.4in x 19.7in x 10.6in) per checked bag</p>
                <p>€3.99 EUR per additional checked bag</p>
            </div>
        </div>
    );
};

export default TripInformation;