import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registration } from '../../../store/authAdministration';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';

const AddBusForm = ({setBusList, busList, setIsAddBusForm}) => {
    const [nameBus, setNameBus] = useState('')
    const [numberBus, setNumberBus] = useState('')
    const [seats, setSeats] = useState('')
    const [toilet, setToilet] = useState(false)
    const [wifi, setWifi] = useState(false)
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddBus = () => {
        try {
          axios.post(`${API_URL}/create-bus`, {
            nameBus,
            numberBus,
            seats,
            toilet,
            wifi
          }) .then(() => {
            setTimeout(() => {
              alert('Bus added');
              setNameBus('');
              setNumberBus('');
              setSeats('');
              setToilet(false);
              setWifi(false);
            },500)

          }).catch((error) => {
            console.log(error);
          })
        } catch (error) {
          console.log(error);
        }
      };

    
    return (
        <>
            <div className='add_user-content'>
                    <div className='add_user-input'>
                        <label htmlFor="first_name">Name Bus</label>
                        <input id='first_name' type="text" value={nameBus} onChange={(e) => setNameBus(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="lust_name">Bus Number</label>
                        <input id='lust_name' type="text" value={numberBus} onChange={(e) => setNumberBus(e.target.value)}  />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="password">Seats</label>
                        <input id='password' type="number" value={seats} onChange={(e) => setSeats(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="toilet">Toilet</label>
                        <input id='toilet' type="checkbox" value={toilet} onChange={(e) => setToilet((state) => !state)}  />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="wifi">Wifi</label>
                        <input id='wifi' type="checkbox" value={wifi} onChange={(e) => setWifi((state) => !state)}  />
                    </div>
                    <button className='btn-save add_user_button'
                    //  onClick={handleRegistrationManager}
                     onClick={handleAddBus}
                     >
                        {t('Save')}</button>
                </div>
        </>
    );
};

export default AddBusForm;