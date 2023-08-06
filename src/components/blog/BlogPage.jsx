import React, {useState, useEffect} from 'react';
import { useTranslation } from "react-i18next";
import '../../style/blog.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';


const BlogPage = () => {
    const [allPosts, setAllPosts] = useState([]);
    const { t } = useTranslation();
    const [editorHtml, setEditorHtml] = useState('');

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
        axios.get(`${API_URL}/get-all-blog-posts`)
        .then((res) => setAllPosts(res.data))
    },[])

    const handleChange = (html) => {
      setEditorHtml(html);
    };

    const modules = {
      toolbar: false, // Вимкнути панель інструментів
    };
    const readOnly = true;

    return (
      <div className="blog-page_wrap">
        <h2>News</h2>
        <div className="blog_body">
          <div className="blog_content">
            <div className="content_wraper">
              {allPosts.length != 0 &&
                allPosts.map((item, idx) => (
                  <Link
                  className='blog_item_wraper-item'
                  to={`/blog/${item._id}`} key={idx}>
                    <div className="item_wrap">
                      <img
                        className="blog_item_img"
                        src={API_URL + item.blogImage}
                        alt="blogimg"
                      />
                      <div className="text_wrap-blog">
                        {lang == "ENG" && (
                          <>
                            <h2 className="blog_item_title">{item.titleEn}</h2>
                            {/* <p className="blog_item_text"> */}
                              {/* {item.descriptionEn}{" "} */}
                              <ReactQuill
                        className='item_faq_text-description'
                        theme="snow"
                        modules={modules}
                        readOnly={readOnly}
                        value={item.descriptionEn}
                        onChange={handleChange}
                      />
                              {/* <span className="blog_item_text--more">
                                {t("More")}...
                              </span> */}
                            {/* </p> */}
                          </>
                        )}
                        {lang == "ESP" && (
                          <>
                            <h2 className="blog_item_title">{item.titleSp}</h2>
                            {/* <p className="blog_item_text"> */}
                              {/* {item.descriptionSp}{" "} */}
                              <ReactQuill
                        className='item_faq_text-description'
                        theme="snow"
                        modules={modules}
                        readOnly={readOnly}
                        value={item.descriptionSp}
                        onChange={handleChange}
                      />
                              {/* <span className="blog_item_text--more">
                                {t("More")}...
                              </span> */}
                            {/* </p> */}
                          </>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="blog_menu">
            <ul className="blog_menu_wrap">
              <li className="blog_menu_wrap-item">All</li>
              <li className="blog_menu_wrap-item">Direct</li>
              <li className="blog_menu_wrap-item">Paymant</li>
              <li className="blog_menu_wrap-item">Booking</li>
              <li className="blog_menu_wrap-item">For partner</li>
            </ul>
          </div>
        </div>
        <div className="blog_pagination">
          <ul className="blog_pagination_wrap">
            <li className="blog_pagination_item">1</li>
            <li className="blog_pagination_item">2</li>
            <li className="blog_pagination_item">3</li>
            <li className="blog_pagination_item">. . .</li>
            <li className="blog_pagination_item">7</li>
            <li className="blog_pagination_item">8</li>
            <li className="blog_pagination_item">9</li>
          </ul>
        </div>
      </div>
    );
};

export default BlogPage;