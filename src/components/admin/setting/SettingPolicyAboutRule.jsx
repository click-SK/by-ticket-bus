import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../style/aboutUsPage.scss';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';

const SettingPolicyAboutRule = ({content, title, input, getUrl, updateUrl}) => {

    const [editorHtml, setEditorHtml] = useState('');
    const [editCityEng, setEditCityEng] = useState('');
    const [editCountryEng, setEditCountryEng] = useState('');
    const [editStreetEng, setEditStreetEng] = useState('');
    const [editNumbEng, setEditNumbEng] = useState('');
    const [editCityEsp, setEditCityEsp] = useState('');
    const [editCountryEsp, setEditCountryEsp] = useState('');
    const [editStreetEsp, setEditStreetEsp] = useState('');
    const [editNumbEsp, setEditNumbEsp] = useState('');
    const [isEngVar, setIsEngVar] = useState(true);
    const [isSpVar, setIsSpVar] = useState(false);
    const [contentSpain, setContentSpain] = useState("");
    const [contentEng, setContentEng] = useState("");
    const [currentObject, setCurrentObject] = useState(null);

    useEffect(() => {
      axios.get(`${API_URL}${getUrl}`)
      .then((res) => setCurrentObject(res.data[0]))
      .catch((error) => {
        console.error('Request error:', error);
      });
    },[])

    useEffect (() => {
      setContentEng(currentObject?.descriptionEn)
      setContentSpain(currentObject?.descriptionSp)
    },[currentObject])

    const handleChange = (html) => {
      setEditorHtml(html);
    };

    const handleChangeEng = (value) => {
        setContentEng(value);
      };
      const handleChangeSpain = (value) => {
        setContentSpain(value);
      };

    const handleShowSp = () => {
        setIsEngVar(false);
        setIsSpVar(true);
      };
    
      const handleShowEng = () => {
        setIsEngVar(true);
        setIsSpVar(false);
      };
  
    // useEffect (() => {
    //     setEditorHtml(content)
    //     setContentEng(content)
    //     setContentSpain(content)
    //   },[])

    const modules = {
      toolbar: true, // Вимкнути панель інструментів
    };
    const readOnly = false;

    const handleUpdateInfo = () => {
      axios.patch(`${API_URL}${updateUrl}`,{
        id: currentObject._id,
        descriptionSp: contentSpain,
        descriptionEn: contentEng
      })
      .then(() => alert('Information updated'))
      .catch((error) => {
        console.error('Request error:', error);
      });
    }

    console.log('currentObject',currentObject);

    return (
        <div className='admin_panel_items content_additional_page_edit'>
            <h2>{title}</h2>
            <div className="blog_tabs_btn">
                <button
                  onClick={handleShowEng}
                  className={`admin_panel_items add_user_button btn_tabs ${
                    isEngVar ? "btn_tabs-active" : ""
                  }`}
                >
                  ENG
                </button>
                <button
                  onClick={handleShowSp}
                  className={`admin_panel_items add_user_button btn_tabs ${
                    isEngVar ? "" : "btn_tabs-active"
                  }`}
                >
                  ESP
                </button>
              </div>
              {isEngVar && 
                <>
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        readOnly={readOnly}
                        value={contentEng}
                        onChange={handleChangeEng}
                    />
                {input && 
                    <div className='input_content_edit'>
                        <div className='input_wrap'>
                            <label htmlFor="country">Сountry</label>
                            <input id='country' type="text"  value={editCountryEng} onChange={(e)=> setEditCountryEng(e.target.value)}/>
                        </div>
                        <div className='input_wrap'>
                            <label htmlFor="city">City</label>
                            <input id='city' type="text" value={editCityEng} onChange={(e)=> setEditCityEng(e.target.value)} />
                        </div>
                        <div className='input_wrap'>
                            <label htmlFor="street">Street</label>
                            <input id='street' type="text" value={editStreetEng} onChange={(e)=> setEditStreetEng(e.target.value)} />
                        </div>
                        <div className='input_wrap'>
                            <label htmlFor="numb">Numb</label>
                            <input id='numb' type="number" value={editNumbEng} onChange={(e)=> setEditNumbEng(e.target.value)} />
                        </div>
                    </div>
                }
              </>
              }
              {isSpVar && 
                <>
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        readOnly={readOnly}
                        value={contentSpain}
                        onChange={handleChangeSpain}
                    />
                {input && 
                    <div className='input_content_edit'>
                        <div className='input_wrap'>
                            <label htmlFor="country">Сountry</label>
                            <input id='country' type="text"  value={editCountryEsp} onChange={(e)=> setEditCountryEsp(e.target.value)}/>
                        </div>
                        <div className='input_wrap'>
                            <label htmlFor="city">City</label>
                            <input id='city' type="text" value={editCityEsp} onChange={(e)=> setEditCityEsp(e.target.value)} />
                        </div>
                        <div className='input_wrap'>
                            <label htmlFor="street">Street</label>
                            <input id='street' type="text" value={editStreetEsp} onChange={(e)=> setEditStreetEsp(e.target.value)} />
                        </div>
                        <div className='input_wrap'>
                            <label htmlFor="numb">Numb</label>
                            <input id='numb' type="number" value={editNumbEsp} onChange={(e)=> setEditNumbEsp(e.target.value)} />
                        </div>
                    </div>
                }
              </>
              }
                <div className='btn_wrap_edit_content'>
                    <button className='add_user_button active_btn_user save_edit_content' onClick={handleUpdateInfo}>Save</button>
                </div>
        </div>
    );
};

export default SettingPolicyAboutRule;