import React, { useEffect, useState, useRef } from "react";
import { FcEditImage } from "react-icons/fc";
import ReactQuill from "react-quill";
import axios from "axios";
import { API_URL } from "../../../http/baseUrl";
import { useTranslation } from "react-i18next";
const EditBlog = ({item, setIsOpenPostItem, isOpenPostItem, setReloadState}) => {
  const [isEditTextEng, setIsEditTextEng] = useState(false);
  const [contentSpain, setContentSpain] = useState("");
  const [contentEng, setContentEng] = useState("");
  const [isEngVar, setIsEngVar] = useState(true);
  const [isSpVar, setIsSpVar] = useState(false);
  const [titleEng, setTitleEng] = useState("");
  const [titleSpain, setTitleSpain] = useState("");
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [inputKey, setInputKey] = useState(0); // Додано стан для key атрибуту
  const { t } = useTranslation();

  useEffect(() => {
    setTitleEng(item.titleEn);
    setTitleSpain(item.titleSp);
    setContentEng(item.descriptionEn);
    setContentSpain(item.descriptionSp);
  }, []);

  useEffect(() => {
    try {
      if (image) {
        const reader = new FileReader();
        reader.onload = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(image);
      }
    } catch(e) {
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

  const handleUpdatePost = () => {
    try {
      const formData = new FormData();
      formData.append("blogImage", image);
      formData.append("titleSp", titleSpain);
      formData.append("titleEn", titleEng);
      formData.append("descriptionSp", contentSpain);
      formData.append("descriptionEn", contentEng);
      formData.append("id", item._id);
      axios.patch(`${API_URL}/update-blog-post`, formData).then(() => {
        alert("Post updated");
        setIsOpenPostItem(!isOpenPostItem);
        setReloadState((state) => !state);
      });
    } catch(e) {
      console.log(e);
    }
    
  };



  const modules = {
    toolbar: false, // Вимкнути панель інструментів
  };
  const readOnly = true;
    return (
        <div>
        <div className="post_item_wrap">
          <FcEditImage onClick={() => setIsEditTextEng(!isEditTextEng)} />
          {imageSrc ? (
            <img src={imageSrc} alt="Selected" className="img_post_item_wrap" />
          ) : (
            <img
              className="img_post_item_wrap"
              src={`${API_URL}${item.blogImage}`}
              alt=""
            />
          )}

          {!isEditTextEng ? (
            <div className="item_content_blog">
              <p>{t('Eng post')} </p>
              <div>{item.date}</div>
              <h4 className="item_content_blog-title">{item.titleEn}</h4>
              {/* <div className="item_text">{item.descriptionEn}</div> */}
              <ReactQuill
                        className='blog_item_text'
                        theme="snow"
                        modules={modules}
                        readOnly={readOnly}
                        value={item.descriptionEn}
                      />
              <p style={{ marginTop: 20 }}>{t('ESP post')} </p>
              <h4>{item.titleSp}</h4>
              {/* <div className="item_text">{item.descriptionSp}</div> */}
              <ReactQuill
                        className='blog_item_text'
                        theme="snow"
                        modules={modules}
                        readOnly={readOnly}
                        value={item.descriptionSp}
                      />
            </div>
          ) 
          :
          (
            <div className="edit_wrap_blog-item">
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
                  onClick={removeImage}
                >
                  {t('Remove image')}
                </button>
              )}
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
            </div>
          )}

          <div className="btn_faq_item_wrap">
            <button
              className="admin_panel_items add_user_button active_btn_user"
              onClick={handleUpdatePost}
            >
              {t('Update')}
            </button>
            <button
              onClick={() => setIsOpenPostItem(!isOpenPostItem)}
              className="admin_panel_items add_user_button active_btn_user btn_cancel"
            >
              {t('Cancel')}
            </button>
          </div>
        </div>
        </div>
    );
};

export default EditBlog;