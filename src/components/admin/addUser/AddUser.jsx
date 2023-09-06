import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { IoMdAddCircle } from 'react-icons/io';
import ManagerForm from './ManagerForm';
import DriverForm from './DriverForm';
import { useTranslation } from "react-i18next";
import $api from '../../../http/httpUsers';
const AddUser = () => {
    const [reloadState, setReloadState ] = useState(false)
    const [isManager, setIsManager ] = useState(false)
    const [isDriver, setIsDriver ] = useState(false)
    const [isPartner, setIsPartner ] = useState(false)
    const [managerList, setManagerList] = useState([]);
    const [driverList, setDriverList] = useState([]);
    const [allRoleList, setAllRoleList] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        try {
            $api.get(`${API_URL}/get-all-managers`)
            .then((res) => {
                const curArray = res.data;
                const withoutFirst = curArray.slice(1);
                console.log('withoutFirst',withoutFirst);
                setManagerList(withoutFirst)
            })
        } catch(e) {
            console.log(e);
        }
    },[reloadState])
    useEffect(() => {
        try {
            $api.get(`${API_URL}/get-all-drivers`)
            .then((res) => {
                setDriverList(res.data);
            })
        } catch(e) {
            console.log(e);
        }
    },[reloadState])


    useEffect(() => {
        try {
            if(driverList.length != 0 && managerList.length != 0) {
                console.log('new Array');
                setAllRoleList([
                    ...managerList,
                    ...driverList
                ])
            }
        } catch(e) {
            console.log(e);
        }
    },[managerList,driverList])
    
    const hendlerOpenAddManager = () =>{
        setIsManager(!isManager)
        setIsDriver(false)
        setIsPartner(false)
    }
    const hendlerOpenAddDriver = () =>{
        setIsManager(false)
        setIsDriver(!isDriver)
        setIsPartner(false)
    }
    const hendlerOpenAddPartner = () =>{
        setIsManager(false)
        setIsDriver(false)
        setIsPartner(!isPartner)
    }

    const handleDeleteDriver = (id) => {
        axios.delete(`${API_URL}/delete-driver`, {
        data: {
          id
        },
      }) .then(() => setTimeout(setReloadState((state) => !state)),500)
    }

    const handleDeleteManager = (id) => {
        axios.delete(`${API_URL}/delete-manager`, {
            data: {
              id
            },
          }) .then(() => setTimeout(setReloadState((state) => !state)),500)
    }



    const handleDeleteUser = (item) => {
        if(item.role == "Manager") {
            handleDeleteManager(item._id);
        } else if (item.role == "Driver") {
            handleDeleteDriver(item._id);
        }
    }

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
            {isManager && 
                <ManagerForm setReloadState={setReloadState}/>
            }
            {isDriver && 
                <DriverForm setReloadState={setReloadState}/>
            }
            {isPartner && 
                <DriverForm/>
            }
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
                    {allRoleList.length != 0 && allRoleList.map((item, idx) => (
                        <div key={idx} className='table_info_item'> 
                            <p className='colum row colum_name table_partner-item'>{(item?.fullName) || (item?.firstName + ' ' + item?.lastName)}</p>
                            <p className='colum row colum_progres table_partner-item'> {item?.role}</p>
                            <p onClick={() => handleDeleteUser(item)}> X</p>
                        </div>
                    ))
                    }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddUser;