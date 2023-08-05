import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../style/aboutUsPage.scss'
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';

const RulesPage = () => {
    const [editorHtml, setEditorHtml] = useState('');
    const [rulesData, setRulesData] = useState('');

    useEffect(() => {
      axios.get(`${API_URL}/get-travel-rules`)
      .then((res) => setRulesData(res.data[0]))
    },[])

    const handleChange = (html) => {
      setEditorHtml(html);
    };
  
    const adressArr = "Ukraine, Kyiv"
  
    useEffect (() => {
      setEditorHtml(rulesData?.descriptionEn)
    },[rulesData])


    const modules = {
      toolbar: false, // Вимкнути панель інструментів
    };
    const readOnly = true;
  return (
<div className='about_us_page_wraper'>
        <h2>Travel Rules</h2>
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

export default RulesPage;