import React from 'react';
import { useTranslation } from "react-i18next";
import SettingPolicyAboutRule from './SettingPolicyAboutRule';
import SettingCurrency from './SettingCurrency';


const SettingSite = () => {
    const { t } = useTranslation();

    const adressArr = "Ukraine, Kyiv"
    const ruleContent = ` <p>Our bus travel company follows certain rules and regulations to ensure a safe and enjoyable journey for all passengers.</p><p>Please familiarize yourself with our travel rules before booking your ticket.</p>`
    const policy = `<p>Your privacy is important to us. This page outlines how we collect, use, and protect your personal information when you use our services. Please review our privacy policy to understand our practices.</p>`
    const contactContent = `<p>If you have any questions or inquiries, please feel free to get in touch with us. Our customer support team is here to assist you.</p> <ul><li>Email: info@buscompany.com</li><li>Phone: +123-456-7890</li><li>Address: Ukraine, Kyiv</li></ul>`
    const contactAboutUs = `<p>Welcome to [Your Bus Company Name], your trusted partner for convenient and safe bus travel experiences. With a legacy of over [Number] years in the industry, we have been dedicated to providing exceptional service and memorable journeys to passengers of all backgrounds.</p>
  
    <p>Our story began in [Year], when a group of passionate travelers decided to revolutionize the way people experience bus travel. Since then, we have grown into a leading name in the transportation sector, known for our commitment to quality, comfort, and reliability.</p>

    <p>At [Your Bus Company Name], we believe that every journey should be more than just a destination; it should be an enriching experience. Our fleet of modern and well-maintained buses ensures that you travel in style and comfort, with onboard amenities designed to make your trip enjoyable. Whether you're embarking on a solo adventure, a family vacation, or a corporate retreat, we have a range of options to cater to your needs.</p>

    <p>Our team of experienced drivers and dedicated staff members work tirelessly to ensure that every aspect of your journey is seamless and stress-free. Safety is our top priority, and we adhere to the highest industry standards to provide you with a secure travel experience.</p>

    <p>As part of our commitment to sustainability, we are actively involved in initiatives to reduce our carbon footprint and promote eco-friendly practices. We also collaborate with local communities along our routes to give back and make a positive impact.</p>

    <p>Join us on a journey that goes beyond travel. Experience the difference with [Your Bus Company Name] and create memories that last a lifetime. We look forward to welcoming you on board.</p>`
    

    return (
        <div className='admin_content_wrap'>
        <h2>{t('Setting site')}</h2>
        <SettingCurrency/>

        <SettingPolicyAboutRule
            title = {'Contact Us'}
            content = {contactContent}
            input={true}
        />
        <SettingPolicyAboutRule
            title = {'About Us'}
            content = {contactAboutUs}
            input={false}
        />
        <SettingPolicyAboutRule
            title = {'Policy'}
            content = {policy}
            input={false}
        />
        <SettingPolicyAboutRule
            title = {'Travel Rules'}
            content = {ruleContent}
            input={false}
        />
    </div>
    );
};

export default SettingSite;