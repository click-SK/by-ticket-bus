import React, { useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { GrDirections } from 'react-icons/gr';
import { FaBus } from 'react-icons/fa';
import { TbEaseInOutControlPoints } from 'react-icons/tb';
import { AiFillSetting } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import '../../style/admin.scss'
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <div className='admin_panel_wraper'>
            <div className='admin_panel'>
                <aside className='admin_panel_aside-menu'>
                    <nav className='admin_panel_nav-bar'>
                        <p className='logo_admin'>Bus <span>Logo</span></p>
                        <ul className='nav_list'>
                            <li className='nav_list-item'><AiFillHome/>Dashboard</li>
                            <li className='nav_list-item'><GrDirections/>Creating directions</li>
                            <li className='nav_list-item'><FaBus/>Add bus</li>
                            <li className='nav_list-item'><TbEaseInOutControlPoints/>Add stops and routs</li>
                            <li className='nav_list-item'><AiFillSetting/>Profile</li>
                            <li className='nav_list-item'><BiLogOut/>Log Out</li>
                        </ul>
                    </nav>
                </aside>
                <div className='admin_panel_content-wraper'>
                    <div className='title_body'>
                        <h2>Main Dashboard</h2>
                        <div> <h3>Ernings</h3></div>
                        <div className='short_content_wrap'>
                            <h3>Derection</h3>
                            <h3>Partner</h3>
                            <h3>Tickets</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;