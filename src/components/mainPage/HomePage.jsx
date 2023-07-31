import React from 'react';
import SearchRouts from './SearchRouts';
import RoutesSection from './RoutesSection';
import HowItWork from './howItWork/HowItWork';
import NewsSection from './news/NewsSection';
import InfoSection from './info/InfoSection';
import Faq from './faq/Faq';
import { useTranslation } from "react-i18next";
import '../../style/homePage.scss'

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <div className='home_page_wraper'>
            <section className='section_main_search'>
                <div className='adversting'>
                        <h1>{t(`Find cheap bus tickets for your next trip`)}</h1>
                    <div className='img_main_wraper'>
                        <img src="./image/bus-main.svg" alt="" />
                    </div>
                </div>
                <SearchRouts/>
            </section>
            <section className='section_routes'>
                <RoutesSection/>
            </section>
            <section className='section_how-it-work'>
                <HowItWork/>
            </section>
            <section className='section_news'>
                <NewsSection/>
            </section>
            <section className='section_info'>
                <InfoSection/>
            </section>
            <section className='section_faq'>
                <Faq/>
            </section>
        </div>
    );
};

export default HomePage;