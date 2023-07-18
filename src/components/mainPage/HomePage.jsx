import React from 'react';
import SearchRouts from './SearchRouts';
import RoutesSection from './RoutesSection';

import '../../style/homePage.scss'

const HomePage = () => {
    return (
        <div className='home_page_wraper'>
            <section className='section_main_search'>
                <div className='adversting'>
                        <h1>Find cheap bus tickets for your next trip</h1>
                    <div className='img_main_wraper'>
                        <img src="./image/bus-main.svg" alt="" />
                    </div>
                </div>
                <SearchRouts/>
            </section>
            <section className='section_routes'>
                <RoutesSection/>
            </section>
        </div>
    );
};

export default HomePage;