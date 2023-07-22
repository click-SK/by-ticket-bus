import React, { useEffect, useState } from 'react';
import DashboardWrap from './dashboard/DashboardWrap';
import Direction from './direction/Direction';
import { BiRightArrow } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { RiDirectionFill } from 'react-icons/ri';
import { FaBus } from 'react-icons/fa';
import { TbEaseInOutControlPoints } from 'react-icons/tb';
import { AiFillSetting } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import '../../style/admin.scss'
import { Link } from 'react-router-dom';

const AdminPanel = () => {

    const [isDashboadr, setIsDashboadr] = useState(true)

    const style =
    [
            {
                name: 'purpule',
                colorBgPrime: '#F6F7F1',
                colorBgSecond:' #DDD',
                colorTextTitle: '#393939',
                colorText: '#393939',
                colorBtn:' #fff',
                colorBtnHover:' #ff9d2d',
                colorPrime: '#E5C51C',
                colorSecond: '#1C54E5',
            }
    ] 

    return (
        <div style={style.colorPurpule} className='admin_panel_wraper'>
            <div className='admin_panel'>
                <aside className='admin_panel_aside-menu'>
                    <p className='logo_admin'>Bus <span>Logo</span></p>
                    <nav className='admin_panel_nav-bar'>
                        <ul className='nav_list'>
                            <li className='nav_list-item nav_list-item-active'><AiFillHome/>Dashboard</li>
                            <li className='nav_list-item'><RiDirectionFill />Creating directions</li>
                            <li className='nav_list-item'><FaBus/>Add bus</li>
                            <li className='nav_list-item'><TbEaseInOutControlPoints/>Add stops and routs</li>
                            <li className='nav_list-item'><AiFillSetting/>Setting</li>
                            <li className='nav_list-item'><AiFillSetting/>Add user and driver</li>
                            <li className='nav_list-item'><AiFillSetting/>Blog</li>
                            <li className='nav_list-item'><AiFillSetting/>Faq</li>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;