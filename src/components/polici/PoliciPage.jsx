import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../style/aboutUsPage.scss'
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
const PoliciPage = () => {
    const [editorHtml, setEditorHtml] = useState('');
    const [policyData, setPolicyData] = useState('');

    useEffect(() => {
      axios.get(`${API_URL}/get-policy`)
      .then((res) => setPolicyData(res.data[0]))
    },[])
    
    const handleChange = (html) => {
      setEditorHtml(html);
    };
  
    const adressArr = "Ukraine, Kyiv"
  
    useEffect (() => {
      setEditorHtml(policyData?.descriptionEn)
    },[policyData])


    const modules = {
      toolbar: false, // Вимкнути панель інструментів
    };
    const readOnly = true;
    return (
        <div className='about_us_page_wraper'>
        <h2>Privacy Policy</h2>
        <ReactQuill
                  className='contact_content_text about_as_content_text'
                  theme="snow"
                  modules={modules}
                  readOnly={readOnly}
                  value={editorHtml}
                  onChange={handleChange}
        />
        
      </div>
    );
};

export default PoliciPage;