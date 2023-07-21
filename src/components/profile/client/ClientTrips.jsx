import React from 'react';
import ClientPlaceholder from './ClientPlaceholder';
import { Link } from 'react-router-dom';

const ClientTrips = () => {
    return (
        <div className='trips_wrap'>
            <ClientPlaceholder/>
            <h3>You have no upcoming trips.</h3>
            <p>Go ahead and explore the world!</p>
            <Link to='/'><button className='btn_prime'>New search</button> </Link>
        </div>
    );
};

export default ClientTrips;