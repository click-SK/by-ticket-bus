import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { IoMdAddCircle } from 'react-icons/io';
// import ManagerForm from './ManagerForm';
// import DriverForm from './DriverForm';
import ManagerForm from '../addUser/ManagerForm';
import DriverForm from '../addUser/DriverForm';
import AddBusForm from './AddBusForm';
import EditBus from './EditBus';
import { useTranslation } from "react-i18next";
import $api from '../../../http/httpUsers';

const AddBusPage = () => {
    const [reloadState, setReloadState ] = useState(false)
    const [isAddBusForm, setIsAddBusForm ] = useState(false)
    const [isDriver, setIsDriver ] = useState(false)
    const [isPartner, setIsPartner ] = useState(false)
    const [managerList, setManagerList] = useState([]);
    const [driverList, setDriverList] = useState([]);
    const [allRoleList, setAllRoleList] = useState([]);
    const [selectedBusIndex, setSelectedBusIndex] = useState(null);
    const { t } = useTranslation();
    const [busList, setBusList] = useState([
        {
            nameBus : 'bus 1',
            number : 'cy8823',
            seats : 35,
            toilet : true,
            wifi: true,
        },
        {
            nameBus : 'bus 2',
            number : 'cy8721',
            seats : 22,
            toilet : false,
            wifi: false,
        }
    ])


    
    const hendlerOpenAddManager = () =>{
        setIsAddBusForm(!isAddBusForm)
        setIsDriver(false)
        setIsPartner(false)
    }
    const hendlerOpenAddDriver = () =>{
        setIsAddBusForm(false)
        setIsDriver(!isDriver)
        setIsPartner(false)
    }
    const hendlerOpenAddPartner = () =>{
        setIsAddBusForm(false)
        setIsDriver(false)
        setIsPartner(!isPartner)
    }

    console.log('listbus', busList);


    return (
        <div className='admin_content_wrap'>
            <h2>Add bus</h2>
            <div className='add_user_button-wrap'>
                <div className='ernings_wraper add-use_wrap'>
                    <div 
                    onClick={hendlerOpenAddManager}
                    className={`ernings_wraper-item admin_panel_items add_user_button ${isAddBusForm ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>Add Bus <IoMdAddCircle/></p>
                    </div>
                    {/* <div 
                    onClick={hendlerOpenAddDriver} 
                    className={`ernings_wraper-item admin_panel_items add_user_button ${isDriver ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>{t('Add Driver')} <IoMdAddCircle/></p>
                    </div>
                    <div
                    onClick={hendlerOpenAddPartner} 
                    className={`ernings_wraper-item admin_panel_items add_user_button ${isPartner ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>{t('Partner')} <IoMdAddCircle/></p>
                    </div> */}
                </div>
            </div>
            {isAddBusForm && 
                <AddBusForm 
                busList = {busList}
                setBusList = {setBusList}
                setIsAddBusForm = {setIsAddBusForm}
                />
            }
            {/* {isDriver && 
                <DriverForm setReloadState={setReloadState}/>
            }
            {isPartner && 
                <DriverForm/>
            } */}
            <div className='admin_panel_items partner_wrap_content'>
                <h3 className='admin_panel_items-title'>Bus List</h3>
                {/* <div className='filter_wrap'>
                    <p className='filter-item'>{t('Manager')}</p>
                    <p className='filter-item'>{t('Driver')}</p>
                    <p className='filter-item'>{t('Partner')}</p>
                </div> */}
                <div className='derection_table_wrap'>
                    <div className='table_header  '>
                        <p className='colum colum_name table_partner-item'>{t('Name')}</p>
                        <p className='colum table_partner-item'>Number</p>

                    </div>
                    <div className='table_body'>
                        {busList.map((item, idx) => (
                            <div key={idx} 
                            onClick={() => setSelectedBusIndex(idx)}
                            className='table_info_item'> 
                                <p className='colum row colum_name table_partner-item'>{item.nameBus}</p>
                                <p className='colum row colum_progres table_partner-item'> {item.number}</p>
                                
                                {/* <p onClick={() => handleDeleteUser(item)}> X</p> */}
                            </div>
                        ))
                        }
                    </div>
                </div>
                {selectedBusIndex !== null && (
                <EditBus
                    bus={busList[selectedBusIndex]}
                    onSave={(editedBus) => {
                    const updatedBusList = [...busList];
                    updatedBusList[selectedBusIndex] = editedBus;
                    setBusList(updatedBusList);
                    setSelectedBusIndex(null); 
                    }}
                    onCancel={() => setSelectedBusIndex(null)} 
                />
                )}
            </div>

        </div>
    );
};

export default AddBusPage;