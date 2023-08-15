import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { IoMdAddCircle } from 'react-icons/io';
// import ManagerForm from './ManagerForm';
// import DriverForm from './DriverForm';
import { useTranslation } from "react-i18next";
import $api from '../../../http/httpUsers';

const AddBusPage = () => {
    const [reloadState, setReloadState ] = useState(false)
    const [isManager, setIsManager ] = useState(false)
    const [isDriver, setIsDriver ] = useState(false)
    const [isPartner, setIsPartner ] = useState(false)
    const [managerList, setManagerList] = useState([]);
    const [driverList, setDriverList] = useState([]);
    const [allRoleList, setAllRoleList] = useState([]);
    const { t } = useTranslation();
    return (
        <div className='admin_content_wrap'>
            <h2>{t('Add User')}</h2>
            <div className='add_user_button-wrap'>
                <div className='ernings_wraper add-use_wrap'>
                    <div 
                    onClick={hendlerOpenAddManager}
                    className={`ernings_wraper-item admin_panel_items add_user_button ${isManager ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>{t('Add Manager')} <IoMdAddCircle/></p>
                    </div>
                    <div 
                    onClick={hendlerOpenAddDriver} 
                    className={`ernings_wraper-item admin_panel_items add_user_button ${isDriver ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>{t('Add Driver')} <IoMdAddCircle/></p>
                    </div>
                    <div
                    onClick={hendlerOpenAddPartner} 
                    className={`ernings_wraper-item admin_panel_items add_user_button ${isPartner ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>{t('Partner')} <IoMdAddCircle/></p>
                    </div>
                </div>
            </div>
            {/* {isManager && 
                <ManagerForm setReloadState={setReloadState}/>
            }
            {isDriver && 
                <DriverForm setReloadState={setReloadState}/>
            }
            {isPartner && 
                <DriverForm/>
            } */}
            <div className='admin_panel_items partner_wrap_content'>
                <h3 className='admin_panel_items-title'>{t('User List')}</h3>
                <div className='filter_wrap'>
                    <p className='filter-item'>{t('Manager')}</p>
                    <p className='filter-item'>{t('Driver')}</p>
                    <p className='filter-item'>{t('Partner')}</p>
                </div>
                <div className='derection_table_wrap'>
                    <div className='table_header  '>
                        <p className='colum colum_name table_partner-item'>{t('Name')}</p>
                        <p className='colum table_partner-item'>{t('Role')}</p>

                    </div>
                    <div className='table_body'>
                    
                        <div key={idx} className='table_info_item'> 
                            <p className='colum row colum_name table_partner-item'>Name bus</p>
                            <p className='colum row colum_progres table_partner-item'> number</p>
                            {/* <p onClick={() => handleDeleteUser(item)}> X</p> */}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddBusPage;