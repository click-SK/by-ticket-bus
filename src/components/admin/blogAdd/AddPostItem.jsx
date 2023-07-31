import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
const AddPostItem = ({ setIsAddNews, setReloadState }) => {
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [contentSpain, setContentSpain] = useState("");
  const [contentEng, setContentEng] = useState("");
  const [isEngVar, setIsEngVar] = useState(true);
  const [isSpVar, setIsSpVar] = useState(false);
  const [titleEng, setTitleEng] = useState("");
  const [titleSpain, setTitleSpain] = useState("");
  const [inputKey, setInputKey] = useState(0); // Додано стан для key атрибуту
  const { t } = useTranslation();
  useEffect(() => {
    try {
      if (image) {
        const reader = new FileReader();
        reader.onload = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(image);
      }
    } catch (e) {
      console.log(e);
    }
  }, [image]);

  const inputFileRef = useRef(null);

  const handleImageChange = (e) => {
    // const file = e.target.files[0];
    setImage(e.target.files[0]);
  };

  const removeImage = () => {
    setImage(null);
    setImageSrc(null);
    setInputKey((prevKey) => prevKey + 1); // Збільшуємо значення key атрибуту
  };

  const handleShowSp = () => {
    setIsEngVar(false);
    setIsSpVar(true);
  };

  const handleShowEng = () => {
    setIsEngVar(true);
    setIsSpVar(false);
  };

  const handleChangeEng = (value) => {
    setContentEng(value);
  };
  const handleChangeSpain = (value) => {
    setContentSpain(value);
  };

  const handleAddNewPost = () => {
    try {
      const formData = new FormData();
      formData.append("blogImage", image);
      formData.append("titleSp", titleSpain);
      formData.append("titleEn", titleEng);
      formData.append("descriptionSp", contentSpain);
      formData.append("descriptionEn", contentEng);
  
      axios.post(`${API_URL}/create-blog-post`, formData)
      .then(() => {
          alert('A new blog post has been added');
          setContentSpain('');
          setContentEng('');
          setTitleEng('');
          setTitleSpain('');
          setImageSrc(null);
          setIsAddNews(false);
          setReloadState((satate) => !satate)
  
      })
    } catch(e) {
      console.log(e);
    }
}
console.log('image',image);
  return (
    <div className="add_post_wrap">
      <div style={{ marginBottom: "50px" }}>
        <h3>{t('Add news')}</h3>
      </div>
      {imageSrc && 
      (
        <div style={{width: '200px', height:'200px', margin: '10px 0px'}}>
        <img src={imageSrc} 
        alt="Selected" 
        style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
        </div>
      )}
      <div>
        <input
          type="file"
          onChange={handleImageChange}
          ref={inputFileRef}
          hidden
          key={inputKey}
        />
        {!imageSrc && (
          <button
            className="admin_panel_items add_user_button active_btn_user"
            onClick={() => inputFileRef.current.click()}
          >
            {t('Add image')}
          </button>
        )}
        {imageSrc && (
          <button
            className="admin_panel_items add_user_button active_btn_user btn_cancel"
            onClick={removeImage}>
            {t('Remove image')}
          </button>
        )}
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
            <label htmlFor="title_eng_input">{t('Title eng')}</label>
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
                  ["link"],
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
              ]}
            />
          </div>
        </>
      )}
      {isSpVar && (
        <>
          <div className="add_title_item">
            <label htmlFor="title_spain_input">{t('Title spain')}</label>
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
                  ["link"],
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
              ]}
            />
          </div>
        </>
      )}
      <div className="btn_faq_item_wrap">
        <button
          className="admin_panel_items add_user_button active_btn_user"
          onClick={handleAddNewPost}
        >
          {t('Publish')}
        </button>
        <button
          onClick={() => setIsAddNews(false)}
          className="admin_panel_items add_user_button active_btn_user btn_cancel"
        >
          {t('Cancel')}
        </button>
      </div>
    </div>
  );
};

export default AddPostItem;
