import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ManagerForm from './ManagerForm';
import DriverForm from './DriverForm';

const AddUser = () => {

    const [isManager, setIsManager ] = useState(false)
    const [isDriver, setIsDriver ] = useState(false)
    const [isPartner, setIsPartner ] = useState(false)

    // input manager 

    const [managerFirstName, setManagerFirstName] = useState('')
    const [managerLastName, setManagerLastName] = useState('')
    const [managerPassword, setManagerPassword] = useState('')
    const [managerLogin, setManagerLogin] = useState('')
    
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
                    {userList.map((item, idx) => (
                        <div key={idx} className='table_info_item'> 
                            <p className='colum row colum_name table_partner-item'>{item.firstName} {item.lustName}</p>
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