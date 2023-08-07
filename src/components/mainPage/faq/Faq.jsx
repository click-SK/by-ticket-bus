import React, { useState, useEffect } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import FaqItem from './FaqItem';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import '../../../style/faqSection.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
const Faq = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [allFaqPost, setAllFaqPost] = useState([]);
    const { t } = useTranslation();
    const [editorHtml, setEditorHtml] = useState('');

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
        axios.get(`${API_URL}/get-all-faq-posts`)
        .then((res) => setAllFaqPost(res.data.slice(-6)))
    },[])

    const handleChange = (html) => {
      setEditorHtml(html);
    };

    const modules = {
      toolbar: false, // Вимкнути панель інструментів
    };
    const readOnly = true;

    return (
      <div className="faq_section_wrap">
        <h2 className="news_title">FAQ</h2>
        <div className="content_wrap-faq">
          {allFaqPost.length != 0 &&
            allFaqPost.map((item, idx) => (
              <div key={idx}>
                {lang == "ENG" && (
                  <FaqItem
                    key={idx}
                    idx={idx}
                    itemTitle={item.titleEn}
                    itemText={item.descriptionEn}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                  />
                )}
                {lang == "ESP" && (
                  <FaqItem
                    key={idx}
                    idx={idx}
                    itemTitle={item.titleSp}
                    itemText={item.descriptionSp}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                  />
                )}
              </div>
            ))}
        </div>

        <div className="more_btn">
          <Link to="/faq">
            <p>
              {t("More")} <BiRightArrow className="svg_more-btn" />
            </p>
          </Link>
        </div>
      </div>
    );
};

export default Faq;