import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registration } from '../../../store/authAdministration';
import { useTranslation } from "react-i18next";

const AddBusForm = ({setBusList, busList, setIsAddBusForm}) => {
    const [nameBus, setNameBus] = useState('')
    const [namberBus, setNamberBus] = useState('')
    const [seats, setSeats] = useState('')
    const [toilet, setToilet] = useState(false)
    const [wifi, setWifi] = useState(false)
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const henderAddBus = () => {
        try {
          setBusList((prevBusList) => [
            ...prevBusList,
            {
              nameBus: nameBus,
              number: namberBus,
              seats: seats,
              toilet: toilet,
              wifi: wifi,
            },
          ]);
          setIsAddBusForm(false)
        } catch (error) {
          console.log(error);
        }
      };

    // const handleRegistrationManager = async () => {
    //     try{
    //         const data = await dispatch(registration({login: toilet, password: managerPasnameBus: nameBus, lastName: namberBus}));
    //         console.log('register manager',data);
    //         if('user' in data.payload) {
    //           alert('A new manager has been added')
    //           setNameBus('');
    //           setNamberBus('');
    //           setSeats('');
    //           setToilet('');
    //           setReloadState((state) => !state)
    //         } else {
    //             alert(data.payload.message)
    //         }
    //     } catch(e) {
    //         console.log(e);
    //     }
    // }
    return (
        <>
            <div className='add_user-content'>
                    <div className='add_user-input'>
                        <label htmlFor="first_name">Name Bus</label>
                        <input id='first_name' type="text" value={nameBus} onChange={(e) => setNameBus(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="lust_name">Bus Number</label>
                        <input id='lust_name' type="text" value={namberBus} onChange={(e) => setNamberBus(e.target.value)}  />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="password">Seats</label>
                        <input id='password' type="number" value={seats} onChange={(e) => setSeats(e.target.value)} />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="toilet">Toilet</label>
                        <input id='toilet' type="checkbox" value={toilet} onChange={(e) => setToilet(e.target.value)}  />
                    </div>
                    <div className='add_user-input'>
                        <label htmlFor="wifi">Wifi</label>
                        <input id='wifi' type="checkbox" value={wifi} onChange={(e) => setWifi(e.target.value)}  />
                    </div>
                    <button className='btn-save add_user_button'
                    //  onClick={handleRegistrationManager}
                     onClick={henderAddBus}
                     >
                        {t('Save')}</button>
                </div>
        </>
    );
};

export default AddBusForm;