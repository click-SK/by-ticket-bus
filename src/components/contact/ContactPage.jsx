import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import GoogleMap from './GoogleMap';
import '../../style/contact.scss'
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
const ContactPage = () => {

  const [editorHtml, setEditorHtml] = useState('');
  const [contactUsData, setContactUsData] = useState('');

  const { t } = useTranslation();

  const lang = useSelector((state) => state.lang.language);

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  useEffect(() => {
    axios.get(`${API_URL}/get-contact-us`)
    .then((res) => setContactUsData(res.data[0]))
    .catch((error) => {
      console.error('Request error:', error);
    });
  },[])

  useEffect (() => {
    if(lang == 'ENG') {
      setEditorHtml(contactUsData?.descriptionEn)
    } else if(lang == 'ESP') {
      setEditorHtml(contactUsData?.descriptionSp)
    }
  },[contactUsData,lang])

  const mapStyles = [
    {
      featureType: "all",
      stylers: [{ saturation: -100 }, { visibility: "simplified" }],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

  // Перетворюємо об'єкт стилів у рядок JSON
  const mapStylesJSON = encodeURIComponent(JSON.stringify(mapStyles));

  const modules = {
    toolbar: false, // Вимкнути панель інструментів
  };
  const readOnly = true;

  return (
    <div className='contact_page_wraper'>
      <h2 className='contact_page_wraper-title'>{t('Contact Us')}</h2>
      <div className='contact_page_contant' >
            <div className='contact_page_left'>
                {/* <p>If you have any questions or inquiries, please feel free to get in touch with us. Our customer support team is here to assist you.</p>
                <p>Email: info@buscompany.com</p>
                <p>Phone: +123-456-7890</p>
                <p>Address: Ukraine, Kyiv</p> */}
                <ReactQuill
                  className='contact_content_text'
                  theme="snow"
                  modules={modules}
                  readOnly={readOnly}
                  value={editorHtml}
                  onChange={handleChange}
                />
            </div>
            <div className='contact_page_right'>
                <iframe
                title="Company Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: '0' }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCzM_aopt5Y3rgR-o30mKxKoRrsSv2k02w&q=Ukraine,Kyiv&zoom=15`}
                allowFullScreen
                ></iframe>
            </div>
      </div>
      
      

    </div>
  );
};

export default ContactPage;