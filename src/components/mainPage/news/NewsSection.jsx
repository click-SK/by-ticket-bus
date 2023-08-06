import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BiRightArrow } from 'react-icons/bi';
import { useTranslation } from "react-i18next";
import '../../../style/newsSection.scss'
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useSelector } from 'react-redux';
const NewsSection = () => {
    const [allPosts, setAllPosts] = useState([])
    const { t } = useTranslation();

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
        axios.get(`${API_URL}/get-all-blog-posts`)
        .then((res) => setAllPosts(res.data.slice(-6)))
    },[])

    return (
      <div className="news_section_wrap">
        <h2 className="news_title">{t("News")}</h2>
        <div className="content_wraper">
          {allPosts.length != 0 &&
            allPosts.map((item, idx) => (
              <div key={idx} className="item_wrap">
                <img
                  className="blog_item_img"
                  src={API_URL + item.blogImage}
                  alt="blogimg"
                />
                <div className="text_wrap-blog">
                  {lang == "ENG" && (
                    <>
                      <h2 className="blog_item_title">{item.titleEn}</h2>
                      <p className="blog_item_text">
                        {item.descriptionEn}{" "}
                        <span className="blog_item_text--more">
                          {t("More")}...
                        </span>
                      </p>
                    </>
                  )}
                  {lang == "ESP" && (
                    <>
                      <h2 className="blog_item_title">{item.titleSp}</h2>
                      <p className="blog_item_text">
                        {item.descriptionSp}{" "}
                        <span className="blog_item_text--more">
                          {t("More")}...
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
        <div className="more_btn">
          <Link to="/blog">
            <p>
              {t("More")} <BiRightArrow className="svg_more-btn" />
            </p>
          </Link>
        </div>
      </div>
    );
};

export default NewsSection;