import React, { useEffect, useState } from 'react';
import DashboardWrap from './dashboard/DashboardWrap';
import Direction from './direction/Direction';
import AddUser from './addUser/AddUser';
import FaqAdmin from './faq/FaqAdmin';
import AddBlog from './blogAdd/AddBlog';
import AddBusPage from './addBus/AddBusPage';
import AddRouts from './addRutes/AddRouts';
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
import SettingSite from './setting/SettingSite';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../store/authAdministration.js'; 
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Statistic from './statistic/Statistic';

const AdminPanel = () => {

    const [isDashboadr, setIsDashboadr] = useState(true)
    const [isDirection, setIsDirection] = useState(false)
    const [isBlog, setIsBlog] = useState(false)
    const [isFaq, setIsFaq] = useState(false)
    const [isAddUser, setIsAddUser] = useState(false)
    const [isSetting, setIsSetting] = useState(false)
    const [isStatistic, setIsStatistic] = useState(false)
    const [isAddBus, setIsAddBus] = useState(false)
    const [isAddRouts, setIsAddRouts] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const user = useSelector((state) => state.authAdmin.user);
    const isAdmin = useSelector((state) => state.authAdmin.isAdmin);
    const isOperator = useSelector((state) => state.authAdmin.isOperator);

    const hendlerOpenDashboadr = () => {
        setIsDashboadr(true)
        setIsDirection(false)
        setIsBlog(false)
        setIsFaq(false)
        setIsAddUser(false)
        setIsSetting(false)
        setIsAddBus(false)
        setIsAddRouts(false)
        setIsStatistic(false)
    }
    const hendlerOpenDirection = () => {
        setIsDashboadr(false)
        setIsDirection(true)
        setIsBlog(false)
        setIsFaq(false)
        setIsAddUser(false)
        setIsSetting(false)
        setIsAddBus(false)
        setIsAddRouts(false)
        setIsStatistic(false)
    }
    const hendlerOpenBlog = () => {
        setIsDashboadr(false)
        setIsDirection(false)
        setIsBlog(true)
        setIsFaq(false)
        setIsAddUser(false)
        setIsSetting(false)
        setIsAddBus(false)
        setIsAddRouts(false)
        setIsStatistic(false)
    }
    const hendlerOpenFaq = () => {
        setIsDashboadr(false)
        setIsDirection(false)
        setIsBlog(false)
        setIsFaq(true)
        setIsAddUser(false)
        setIsSetting(false)
        setIsAddBus(false)
        setIsAddRouts(false)
        setIsStatistic(false)
    }
    const hendlerOpenAddUser = () => {
        setIsDashboadr(false)
        setIsDirection(false)
        setIsBlog(false)
        setIsFaq(false)
        setIsAddUser(true)
        setIsSetting(false)
        setIsAddBus(false)
        setIsAddRouts(false)
        setIsStatistic(false)
    }
    const hendlerOpenSetting = () => {
        setIsDashboadr(false)
        setIsDirection(false)
        setIsBlog(false)
        setIsFaq(false)
        setIsAddUser(false)
        setIsSetting(true)
        setIsAddBus(false)
        setIsAddRouts(false)
        setIsStatistic(false)
    }
    const hendlerOpenAddBus = () => {
        setIsDashboadr(false)
        setIsDirection(false)
        setIsBlog(false)
        setIsFaq(false)
        setIsAddUser(false)
        setIsSetting(false)
        setIsAddBus(true)
        setIsAddRouts(false)
        setIsStatistic(false)
    }
    const hendlerOpenAddRoutes = () => {
        setIsDashboadr(false)
        setIsDirection(false)
        setIsBlog(false)
        setIsFaq(false)
        setIsAddUser(false)
        setIsSetting(false)
        setIsAddBus(false)
        setIsStatistic(false)
        setIsAddRouts(true)
    }
    const hendlerOpenStatistic = () => {
        setIsDashboadr(false)
        setIsDirection(false)
        setIsBlog(false)
        setIsFaq(false)
        setIsAddUser(false)
        setIsSetting(false)
        setIsAddBus(false)
        setIsAddRouts(false)
        setIsStatistic(true)
    }

    const logoutAdministration = () => {
        dispatch(logout({accessToken: user.accessToken}));
        navigate('/');
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
                            className={`nav_list-item ${isDashboadr ? 'nav_list-item-active' : ''} `}><AiFillHome/>{t('Dashboard')}</li>
                            <li 
                            onClick={hendlerOpenDirection}
                            className={`nav_list-item ${isDirection ? 'nav_list-item-active' : ''} `}><RiDirectionFill />{t('Creating directions')}</li>
                            <li 
                            onClick={hendlerOpenAddBus}
                            className={`nav_list-item ${isAddBus ? 'nav_list-item-active' : ''} `}><FaBus/>{t('Add bus')}</li>
                            <li 
                            onClick={hendlerOpenAddRoutes}
                            className={`nav_list-item ${isAddRouts ? 'nav_list-item-active' : ''} `}>
                                <TbEaseInOutControlPoints/>{t('Add stops and routes')}</li>
                            {!isOperator &&
                            <li 
                            onClick={hendlerOpenSetting}
                            className={`nav_list-item ${isSetting ? 'nav_list-item-active' : ''} `}><AiFillSetting/>{t('Setting')}</li>}
                            {!isOperator &&
                            <li 
                            onClick={hendlerOpenStatistic}
                            className={`nav_list-item ${isStatistic ? 'nav_list-item-active' : ''} `}><AiFillSetting/>Statistic</li>}
                            {!isOperator &&
                            <li 
                            onClick={hendlerOpenAddUser}
                            className={`nav_list-item ${isAddUser ? 'nav_list-item-active' : ''} `}><FaUserCheck/>{t('Add user and driver')}</li>}
                            <li 
                            onClick={hendlerOpenBlog}
                            className={`nav_list-item ${isBlog ? 'nav_list-item-active' : ''} `}><PiNewspaperClippingFill/>{t('Blog')}</li>
                            <li 
                            onClick={hendlerOpenFaq}
                            className={`nav_list-item ${isFaq ? 'nav_list-item-active' : ''} `}><FaQuestionCircle/>Faq</li>
                            <li className='nav_list-item'><AiFillSetting/>{t('Profile')}</li>
                            <li className='nav_list-item' onClick={logoutAdministration}><BiLogOut/>{t('Log Out')}</li>
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
                        {isAddBus && 
                            <AddBusPage/>
                        }
                        {isAddRouts && 
                            <AddRouts/>
                        }
                        {isSetting && 
                            <SettingSite/>
                        }
                        {isStatistic && 
                            <Statistic/>
                        }
                        {isAddUser&&
                            <AddUser/>
                        }
                        {isBlog &&
                            <AddBlog/>
                        }
                        {isFaq && 
                            <FaqAdmin/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;