import React from 'react';
import '../../style/searchRouts.scss'

const SearchRouts = () => {
    return (
        <div className='serch_routs_wraper'>
            <div>
                <p>from</p>
            </div>
            <div>
                <p>to</p>
            </div>
            <div>
                <p>date</p>
            </div>
            <div>
                <p>date</p>
            </div>
            <div>
                <p>pasanger</p>
            </div>
            <button className='search-btn'>Search</button>
        </div>
    );
};

export default SearchRouts;