import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FaqAddPost from './FaqAddPost';

const FaqAdmin = () => {
    const [content, setContent] = useState('');
    const [ isAddNews, setIsAddNews] = useState(false);
    const [ isOpenPostItem, setIsOpenItem] = useState(false)

    const handleChange = (value) => {
      setContent(value);
    };

    const postList = [
        { 
            date : '24/07/23',
            titleEng : 'How to find a ride?',
            titleSpian : 'How to find a ride?',
            textEng: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            textSpain: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            img: 'url'
        },
        { 
            date : '24/07/23',
            titleEng : 'How to find a ride?',
            titleSpian : 'How to find a ride?',
            textEng: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            textSpain: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            img: 'url'
        },
        { 
            date : '24/07/23',
            titleEng : 'How to find a ride?',
            titleSpian : 'How to find a ride?',
            textEng: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            textSpain: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            img: 'url'
        },
        { 
            date : '24/07/23',
            titleEng : 'How to find a ride?',
            titleSpian : 'How to find a ride?',
            textEng: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            textSpain: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            img: 'url'
        },
        { 
            date : '24/07/23',
            titleEng : 'How to find a ride?',
            titleSpian : 'How to find a ride?',
            textEng: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            textSpain: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            img: 'url'
        },
        { 
            date : '24/07/23',
            titleEng : 'How to find a ride?',
            titleSpian : 'How to find a ride?',
            textEng: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            textSpain: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.',
            img: 'url'
        },
        
    ]
    return (
    <div className='admin_content_wrap blog_wrap'>
            <h2>FAQ</h2>
            <div>
                <div
                    onClick={() => setIsAddNews(!isAddNews)} 
                    className={`ernings_wraper-item admin_panel_items add_user_button ${true ? 'active_btn_user' : ''}`}>
                    <p className='curent_sum add_user-item'>Add faq <IoMdAddCircle/></p>
                </div>
            </div>
            <div className='derection_table_wrap'>
                    <div className='table_header  '>
                        <p className='colum colum_name table_partner-item'>Title</p>
                        <p className='colum table_partner-item'>Date</p>

                    </div>
                    {isAddNews && 
                        <FaqAddPost/>
                    }
                    <div className='table_body'>
                    {postList.map((item, idx) => (
                        <div 
                        onClick={() => setIsOpenItem(!isOpenPostItem)}
                        key={idx} className='table_info_item'> 
                            <p className='colum row colum_name table_partner-item'>{item.titleEng}</p>
                            <p className='colum row colum_progres table_partner-item'> {item.date}</p>
                            {isOpenPostItem && 
                                <div className='post_item_wrap'>
                                    <h4>{item.titleEng}</h4>
                                    <div>{item.date}</div>
                                    <div>{item.textEng}</div>
                                </div>
                            }
                        </div>

                    ))
                    }
                    </div>
                </div>
            
        </div>
    );
};

export default FaqAdmin;