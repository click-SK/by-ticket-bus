import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import SelectRoutTicket from './SelectRoutTicket';
const Statistic = () => {
    const [allRoutTickets, setAllRoutTickets] = useState([]);
    const [selectRout, setSelectedRout] = useState(null);
    useEffect(() => {
        axios.get(`${API_URL}/get-all-tickets`)
        .then((res) => {
            setAllRoutTickets(res.data);
        }).catch((error) => {
            console.log('Request error',error);
        })
    },[])

    console.log('selectRout',selectRout);
    return (
        <div>
            Statistic
            <SelectRoutTicket setSelectedRout={setSelectedRout} allRouts={allRoutTickets}/>
        </div>
    );
};

export default Statistic;