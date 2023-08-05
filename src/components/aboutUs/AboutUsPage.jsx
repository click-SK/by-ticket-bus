import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../style/aboutUsPage.scss'
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
const AboutUsPage = () => {
    const [editorHtml, setEditorHtml] = useState('');
    const [aboutUsData, setAboutUsData] = useState('');

    useEffect(() => {
      axios.get(`${API_URL}/get-about-us`)
      .then((res) => setAboutUsData(res.data[0]))
    },[])



    const handleChange = (html) => {
      setEditorHtml(html);
    };
  
    const adressArr = "Ukraine, Kyiv"
  
    useEffect (() => {
      setEditorHtml(aboutUsData?.descriptionEn)
    },[aboutUsData])


    const modules = {
      toolbar: false, // Вимкнути панель інструментів
    };
    const readOnly = true;

    return (
        <div className='about_us_page_wraper'>
        <h2>About Us</h2>
        <ReactQuill
                  className='contact_content_text about_as_content_text'
                  theme="snow"
                  modules={modules}
                  readOnly={readOnly}
                  value={editorHtml}
                  onChange={handleChange}
                />
        {/* <p>Welcome to [Your Bus Company Name], your trusted partner for convenient and safe bus travel experiences. With a legacy of over [Number] years in the industry, we have been dedicated to providing exceptional service and memorable journeys to passengers of all backgrounds.</p>
  
        <p>Our story began in [Year], when a group of passionate travelers decided to revolutionize the way people experience bus travel. Since then, we have grown into a leading name in the transportation sector, known for our commitment to quality, comfort, and reliability.</p>
  
        <p>At [Your Bus Company Name], we believe that every journey should be more than just a destination; it should be an enriching experience. Our fleet of modern and well-maintained buses ensures that you travel in style and comfort, with onboard amenities designed to make your trip enjoyable. Whether you're embarking on a solo adventure, a family vacation, or a corporate retreat, we have a range of options to cater to your needs.</p>
  
        <p>Our team of experienced drivers and dedicated staff members work tirelessly to ensure that every aspect of your journey is seamless and stress-free. Safety is our top priority, and we adhere to the highest industry standards to provide you with a secure travel experience.</p>
  
        <p>As part of our commitment to sustainability, we are actively involved in initiatives to reduce our carbon footprint and promote eco-friendly practices. We also collaborate with local communities along our routes to give back and make a positive impact.</p>
  
        <p>Join us on a journey that goes beyond travel. Experience the difference with [Your Bus Company Name] and create memories that last a lifetime. We look forward to welcoming you on board.</p> */}
      </div>
    );
};

export default AboutUsPage;