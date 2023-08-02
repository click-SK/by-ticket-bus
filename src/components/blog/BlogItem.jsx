import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = () => {
    return (
        <div className='blog_wrap'>
            <h2>travel easy</h2>
            <div className='blog_body blog_item_body'>
                    <div className='blog_img_wrap'>
                        <img src="./image/blog/1.png" alt="" />
                    </div>
                    <div className='blog_text'>
                        <p >Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort</p>
                    </div>
                    <div className='button_wrap_blog'>
                        <Link to='/blog'>
                            <button className='btn_prime blog_btn-item'>Back to blog</button>
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default BlogItem;