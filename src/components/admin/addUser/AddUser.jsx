import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { IoMdAddCircle } from 'react-icons/io';
import ManagerForm from './ManagerForm';
import DriverForm from './DriverForm';

const AddUser = () => {

    const [isManager, setIsManager ] = useState(false)
    const [isDriver, setIsDriver ] = useState(false)
    const [isPartner, setIsPartner ] = useState(false)
    const [managerList, setManagerList] = useState([]);
    const [driverList, setDriverList] = useState([]);
    const [allRoleList, setAllRoleList] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/get-all-managers`)
        .then((res) => {
            const curArray = res.data;
            const withoutFirst = curArray.slice(1);
            console.log('withoutFirst',withoutFirst);
            setManagerList(withoutFirst)
        })
    },[])
    useEffect(() => {
        axios.get(`${API_URL}/get-all-drivers`)
        .then((res) => {
            setDriverList(res.data);
        })
    },[])

    console.log('driverList',driverList);
    console.log('managerList',managerList);

    useEffect(() => {
        if(driverList.length != 0 && managerList.length != 0) {
            console.log('new Array');
            setAllRoleList([
                ...managerList,
                ...driverList
            ])
        }
    },[managerList,driverList])

    console.log('allRoleList',allRoleList);
    
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

    const userList = [
        { 
            firstName : 'Aron',
            lustName : 'Jeckson',
            login: 'AJ',
            role: 'Driver'
        },
        { 
            firstName : 'TicketWay',
            lustName : '',
            login: 'TicketWay',
            role: 'Partner'
        },
        { 
            firstName : 'Mike',
            lustName : 'Bilte',
            login: 'MB',
            role: 'Manager'
        },
        { 
            firstName : 'Alex',
            lustName : 'Kuch',
            login: 'AK',
            role: 'Driver'
        },
        { 
            firstName : 'Ros',
            lustName : 'Galler',
            login: 'RG',
            role: 'Partner'
        },
    ]


    return (
        <div className='admin_content_wrap'>
            <h2>Add User</h2>
            <div className='add_user_button-wrap'>
                <div className='ernings_wraper add-use_wrap'>
                    <div 
                    onClick={hendlerOpenAddManager}
                    className={`ernings_wraper-item admin_panel_items add_user_button ${isManager ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>Add Manager <IoMdAddCircle/></p>
                    </div>
                    <div 
                    onClick={hendlerOpenAddDriver} 
                    className={`ernings_wraper-item admin_panel_items add_user_button ${isDriver ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>Add Driver <IoMdAddCircle/></p>
                    </div>
                    <div
                    onClick={hendlerOpenAddPartner} 
                    className={`ernings_wraper-item admin_panel_items add_user_button ${isPartner ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>Partner <IoMdAddCircle/></p>
                    </div>
                </div>
            </div>
            {isManager && 
                <ManagerForm/>
            }
            {isDriver && 
                <DriverForm/>
            }
            {isPartner && 
                <DriverForm/>
            }
            <div className='admin_panel_items partner_wrap_content'>
                <h3 className='admin_panel_items-title'>User List</h3>
                <div className='filter_wrap'>
                    <p className='filter-item'>Manager</p>
                    <p className='filter-item'>Driver</p>
                    <p className='filter-item'>Partner</p>
                </div>
                <div className='derection_table_wrap'>
                    <div className='table_header  '>
                        <p className='colum colum_name table_partner-item'>Name</p>
                        <p className='colum table_partner-item'>Role</p>

                    </div>
                    <div className='table_body'>
                    {allRoleList.length != 0 && allRoleList.map((item, idx) => (
                        <div key={idx} className='table_info_item'> 
                            <p className='colum row colum_name table_partner-item'>{(item.fullName) || (item.firstName + ' ' + item.lastName)}</p>
                            <p className='colum row colum_progres table_partner-item'> {item.role}</p>
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