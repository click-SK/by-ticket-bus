import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
import { useSelector } from 'react-redux';
const BlogItem = () => {
    const [currentPost, setCurrentPost] = useState(null);
    const [userrentId, setCurrentId] = useState('');

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
        }
    },[userrentId])

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
              {lang == "ENG" && <p>{currentPost.descriptionEn}</p>}
              {lang == "ESP" && <p>{currentPost.descriptionSp}</p>}
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