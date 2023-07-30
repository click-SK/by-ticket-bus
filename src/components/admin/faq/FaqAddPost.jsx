import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
const FaqAddPost = ({setIsAddNews}) => {
    const [contentSpain, setContentSpain] = useState('');
    const [contentEng, setContentEng] = useState('');
    const [isEngVar, setIsEngVar] = useState(true);
    const [isSpVar, setIsSpVar] = useState(false);
    const [titleEng, setTitleEng] = useState('');
    const [titleSpain, setTitleSpain] = useState('');
    const { t } = useTranslation();

    const handleShowSp = () => {
        setIsEngVar(false);
        setIsSpVar(true);
    }

    const handleShowEng = () => {
        setIsEngVar(true);
        setIsSpVar(false);
    }


    const handleChangeEng = (value) => {
      setContentEng(value);
    };
    const handleChangeSpain = (value) => {
      setContentSpain(value);
    };

    const handleAddNewFaq = () => {
      try {
        axios.post(`${API_URL}/create-faq-post`, {
          titleSp: titleSpain,
          titleEn: titleEng,
          descriptionSp: contentSpain,
          descriptionEn: contentEng
      })
      .then(() => {
          alert('A new FAQ post has been added');
          setContentSpain('');
          setContentEng('');
          setTitleEng('');
          setTitleSpain('');
      })
      } catch(e) {
        console.log(e);
      }
    }
    return (
      <div className="add_post_wrap">
        <div style={{ marginBottom: "50px" }}>
          <h3>Add faq</h3>
        </div>
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
        {isEngVar && (
          <>
            <div className="add_title_item">
              <label htmlFor="title_eng_input">{t('Question eng')}</label>
              <input
                id="title_eng_input"
                value={titleEng}
                type="text"
                onChange={(e) => setTitleEng(e.target.value)}
              />
            </div>
            <div className="add_text_item">
              <h4>{t('Eng text')}</h4>
              <ReactQuill
                value={contentEng}
                onChange={handleChangeEng}
                placeholder="Write your blog article here..."
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    [{ color: [] }, { background: [] }],
                    [{ align: [] }],
                    ["link", "image"],
                    ["clean"],
                  ],
                }}
                formats={[
                  "header",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "list",
                  "bullet",
                  "blockquote",
                  "code-block",
                  "color",
                  "background",
                  "align",
                  "link",
                  "image",
                ]}
              />
            </div>
          </>
        )}
        {isSpVar && (
          <>
            <div className="add_title_item">
              <label htmlFor="title_spain_input">{t('Question spain')}</label>
              <input
                id="title_spain_input"
                value={titleSpain}
                type="text"
                onChange={(e) => setTitleSpain(e.target.value)}
              />
            </div>
            <div className="add_text_item">
              <h4>{t('Spain text')}</h4>
              <ReactQuill
                value={contentSpain}
                onChange={handleChangeSpain}
                placeholder="Write your blog article here..."
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    [{ color: [] }, { background: [] }],
                    [{ align: [] }],
                    ["link", "image"],
                    ["clean"],
                  ],
                }}
                formats={[
                  "header",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "list",
                  "bullet",
                  "blockquote",
                  "code-block",
                  "color",
                  "background",
                  "align",
                  "link",
                  "image",
                ]}
              />
            </div>
          </>
        )}
        <div className='btn_faq_item_wrap'>
          <button
            className="admin_panel_items add_user_button active_btn_user"
            onClick={handleAddNewFaq}
          >
            {" "}
            {t('Publish')}{" "}
          </button>
          <button
            className="admin_panel_items add_user_button active_btn_user btn_cancel"
            onClick={() => setIsAddNews(false)}
          >
            {" "}
            {t('Close')}{" "}
          </button>
        </div>
      </div>
    );
};

export default FaqAddPost;