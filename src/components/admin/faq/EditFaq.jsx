import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ReactQuill from 'react-quill';
import FaqAddPost from './FaqAddPost';
import { FcEditImage } from 'react-icons/fc';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
const EditFaq = ({item, setReloadState, isOpenPostItem, setIsOpenPostItem}) => {
    const [isEditTextEng, setIsEditTextEng] = useState(false);
    const [contentSpain, setContentSpain] = useState("");
    const [contentEng, setContentEng] = useState("");
    const [isEngVar, setIsEngVar] = useState(true);
    const [isSpVar, setIsSpVar] = useState(false);
    const [titleEng, setTitleEng] = useState("");
    const [titleSpain, setTitleSpain] = useState("");
    const { t } = useTranslation();

    useEffect(() => {
      setTitleEng(item.titleEn);
      setTitleSpain(item.titleSp);
      setContentEng(item.descriptionEn);
      setContentSpain(item.descriptionSp);
    },[])
  
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
        axios.patch(`${API_URL}/update-faq-post`, {
          titleSp: titleSpain,
          titleEn: titleEng,
          descriptionSp: contentSpain,
          descriptionEn: contentEng,
          id: item._id
        }).then(() => {
          alert('Post updated');
          setIsOpenPostItem(!isOpenPostItem);
          setReloadState((state) => !state);
        })
      } catch(e) {
        console.log(e);
      }
    }
    return (
        <div className="post_item_wrap">
          <FcEditImage onClick={() => setIsEditTextEng(!isEditTextEng)} />

            {!isEditTextEng ? 
                          <div className="item_content_blog">
                          <p>{t('Eng post')} </p> 
                        <div>{item.createdAt}</div>
                        <h4 className="item_content_blog-title">{item.titleEn}</h4>
                        <div className="item_text">
                          {item.descriptionEn}          
                        </div>
                        <p style={{marginTop: 20}}>{t('ESP post')} </p> 
                        <h4>{item.titleSp}</h4>
                        <div className="item_text">
                          {item.descriptionSp}          
                        </div>
                        </div>

              :
              <div className="edit_wrap_blog-item">
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
            }

          <div className="btn_faq_item_wrap">
            <button className="admin_panel_items add_user_button active_btn_user"
            onClick={handleUpdatePost}>
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
      );
};

export default EditFaq;