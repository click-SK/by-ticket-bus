import React, { useEffect, useState } from 'react';
import DashboardWrap from './dashboard/DashboardWrap';
import Direction from './direction/Direction';
import AddUser from './addUser/AddUser';
import FaqAdmin from './faq/FaqAdmin';
import AddBlog from './blogAdd/AddBlog';
import { BiRightArrow } from 'react-icons/bi';
import { PiNewspaperClippingFill } from 'react-icons/pi';
import { AiFillHome } from 'react-icons/ai';
import { FaUserCheck } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { RiDirectionFill } from 'react-icons/ri';
import { FaBus } from 'react-icons/fa';
import { TbEaseInOutControlPoints } from 'react-icons/tb';
import { AiFillSetting } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import '../../style/admin.scss'
import { Link } from 'react-router-dom';

const AdminPanel = () => {

    const [isDashboadr, setIsDashboadr] = useState(false)
    const [isDirection, setIsDirection] = useState(false)
    const [isBlog, setIsBlog] = useState(false)
    const [isFaq, setIsFaq] = useState(false)
    const [isAddUser, setIsAddUser] = useState(true)

    const hendlerOpenDashboadr = () => {
        setIsDashboadr(true)
        setIsDirection(false)
        setIsBlog(false)
        setIsFaq(false)
        setIsAddUser(false)
    }
    const hendlerOpenDirection = () => {
        setIsDashboadr(false)
        setIsDirection(true)
        setIsBlog(false)
        setIsFaq(false)
        setIsAddUser(false)
    }
    const hendlerOpenBlog = () => {
        setIsDashboadr(false)
        setIsDirection(false)
        setIsBlog(true)
        setIsFaq(false)
        setIsAddUser(false)
    }
    const hendlerOpenFaq = () => {
        setIsDashboadr(false)
        setIsDirection(false)
        setIsBlog(false)
        setIsFaq(true)
        setIsAddUser(false)
    }
    const hendlerOpenAddUser = () => {
        setIsDashboadr(false)
        setIsDirection(false)
        setIsBlog(false)
        setIsFaq(false)
        setIsAddUser(true)
    }

    return (
        <div className='admin_panel_wraper'>
            <div className='admin_panel'>
                <aside className='admin_panel_aside-menu'>
                    <p className='logo_admin'>Bus <span>Logo</span></p>
                    <nav className='admin_panel_nav-bar'>
                        <ul className='nav_list'>
                            <li 
                            onClick={hendlerOpenDashboadr}
                            className={`nav_list-item ${isDashboadr ? 'nav_list-item-active' : ''} `}><AiFillHome/>Dashboard</li>
                            <li 
                            onClick={hendlerOpenDirection}
                            className={`nav_list-item ${isDirection ? 'nav_list-item-active' : ''} `}><RiDirectionFill />Creating directions</li>
                            <li className='nav_list-item'><FaBus/>Add bus</li>
                            <li className='nav_list-item'><TbEaseInOutControlPoints/>Add stops and routs</li>
                            <li className='nav_list-item'><AiFillSetting/>Setting</li>
                            <li 
                            onClick={hendlerOpenAddUser}
                            className={`nav_list-item ${isAddUser ? 'nav_list-item-active' : ''} `}><FaUserCheck/>Add user and driver</li>
                            <li 
                            onClick={hendlerOpenBlog}
                            className={`nav_list-item ${isBlog ? 'nav_list-item-active' : ''} `}><PiNewspaperClippingFill/>Blog</li>
                            <li 
                            onClick={hendlerOpenFaq}
                            className={`nav_list-item ${isFaq ? 'nav_list-item-active' : ''} `}><FaQuestionCircle/>Faq</li>
                            <li className='nav_list-item'><AiFillSetting/>Profile</li>
                            <li className='nav_list-item'><BiLogOut/>Log Out</li>
                        </ul>
                    </nav>
                </aside>
                <div className='admin_panel_content-wraper'>
                    <div className='title_body'>
                        {isDashboadr && 
                            <DashboardWrap/>
                        }
                        {isDirection && 
                            <Direction/>
                        }
                        {isAddUser&&
                            <AddUser/>
                        }
                        {isBlog &&
                            <AddBlog/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;