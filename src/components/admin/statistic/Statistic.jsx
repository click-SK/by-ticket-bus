import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import SelectRoutTicket from './SelectRoutTicket';
import { useTranslation } from "react-i18next";
const Statistic = () => {
    const { t } = useTranslation();
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

    // console.log('selectRout',selectRout);
    return (
        <div className='admin_content_wrap'>
        <h2>Statictic</h2>
            <SelectRoutTicket 
            setSelectedRout={setSelectedRout} 
            allRouts={allRoutTickets}
            selectRout={selectRout}
            />
        </div>
    );
};

export default Statistic;