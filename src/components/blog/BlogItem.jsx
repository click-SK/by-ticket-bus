import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';


const BlogItem = () => {
    const [currentPost, setCurrentPost] = useState(null);
    const [userrentId, setCurrentId] = useState('');
    const [editorHtml, setEditorHtml] = useState('');

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
        const url = window.location.href;
        const urlParts = url.split('/');

        // Останній елемент масиву буде ID, яке вам потрібно.
        const id = urlParts[urlParts.length - 1];
        setCurrentId(id);
    },[])

    useEffect(() => {
        if(userrentId) {
            axios.get(`${API_URL}/get-one-blog-post/${userrentId}`)
            .then((res) => setCurrentPost(res.data))
            .catch((error) => {
              console.error('Request error:', error);
            });
        }
    },[userrentId])

    const handleChange = (html) => {
      setEditorHtml(html);
    };

    const modules = {
      toolbar: false, // Вимкнути панель інструментів
    };
    const readOnly = true;

    console.log('currentPost',currentPost);
    return (
      <>
        {currentPost && (
          <div className="blog-page_wrap">
            {lang == "ENG" && <h2>{currentPost.titleEn}</h2>}
            {lang == "ESP" && <h2>{currentPost.titleSp}</h2>}
            <div className="blog_body blog_item_body">
              <div className="blog_img_wrap">
                <img src={`${API_URL}${currentPost.blogImage}`} alt="" />
              </div>
              <div className="blog_text">
              {lang == "ENG" && 
              // <p>{currentPost.descriptionEn}</p>
              <ReactQuill
              className='item_faq_text-description'
              theme="snow"
              modules={modules}
              readOnly={readOnly}
              value={currentPost.descriptionEn}
              onChange={handleChange}
               />
              }
              {lang == "ESP" &&
              //  <p>{currentPost.descriptionSp}</p>
               <ReactQuill
               className='item_faq_text-description'
               theme="snow"
               modules={modules}
               readOnly={readOnly}
               value={currentPost.descriptionSp}
               onChange={handleChange}
                />
               }
              </div>
              <div className="button_wrap_blog">
                <Link to="/blog">
                  <button className="btn_prime blog_btn-item">
                    Back to blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default BlogItem;