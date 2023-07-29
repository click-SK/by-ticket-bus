import React, {useState, useEffect} from 'react';
import { API_URL } from '../../../http/baseUrl';
import axios from 'axios';
const ClientPassanger = ({user}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
    },[user])

    const handleUpdateUserName = () => {
        axios.patch(`${API_URL}/update-user-name`, {id: user._id, firstName, lastName})
    }
    return (
        <div className='client_body_item_wrap'>
                <h3> Account holder</h3>
                <div className='passanger_item'>
                    <p>FIRST NAME LAST NAME</p>
                    <input type="text" 
                    placeholder='FIRST NAME'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" 
                    placeholder='LAST NAME'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                </div>
                <button className='btn_prime' onClick={handleUpdateUserName}> Save</button>
                <button className='btn_prime'> Add Passanger</button>
        </div>
    );
};

export default ClientPassanger;