import React, { useState, useEffect } from 'react';
import { BiDownArrow } from 'react-icons/bi';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
const SettingCurrency = () => {
    const [reloadState, setReloadState] = useState(false);
    const [allcurrencies, setAllCurrencies] = useState([]);
    const [isAddCoin, setIsAddCoin] = useState(false)
    const [curentCurrencies, setCurrentCurrencies] = useState([])
    const [isOpenSelect, setIsOpenSelect] = useState('')
    const { t } = useTranslation();
    
    useEffect(() => {
            axios.get(`${API_URL}/get-all-default-currencies`)
            .then((res) => {
                setAllCurrencies(res.data[0].currencies);
            })
            .catch((error) => {
                console.error('Request error:', error);
              });
    },[])

    useEffect(() => {
            axios.get(`${API_URL}/get-all-current-currencies`)
            .then((res) => {
                setCurrentCurrencies(res.data)
            })
            .catch((error) => {
                console.error('Request error:', error);
              });
    },[reloadState])

    const handleAddCurrencie = (e) => {
        try {
            const {currencieName, currencieValue} = e;
            const arrayCurrenciesNames = curentCurrencies.map(item => item.currencieName);
            const boolean = arrayCurrenciesNames.includes(currencieName);
            if(!boolean) {
                axios.post(`${API_URL}/create-current-currencies`, {currencieName, currencieValue})
                .then(() => {
                    setTimeout(() => {
                        setReloadState((state) => !state);
                    },500)
                  })
                  .catch((error) => {
                    console.error('Request error:', error);
                  });
            } else {
                alert('This currency has already been added')
            }
        } catch(e) {
            console.log(e);
        }
    }

    const handleDeleteCurrentCurencies = (id, name) => {
            if(name !== 'EUR') {
                axios.delete(`${API_URL}/delete-current-currencies`, {
                    data: {
                      id
                    },
                  })
                  .then(() => {
                    setTimeout(() => {
                        setReloadState((state) => !state);
                    },500)
                  })
                  .catch((error) => {
                    console.error('Request error:', error);
                  });
            } else {
                alert('You cannot delete this currency')
            }
    }

    return (
        <>
        <div className='admin_panel_items coin_wrap'>
            {/* <div className='add_coin'>
                <button
                onClick={() => setIsAddCoin(!isAddCoin)}
                className='ernings_wraper-item admin_panel_items add_user_button active_btn_user' >{t('Add currency')}</button>
            </div> */}
            <div className='coin_list'>
                <h5 className='content_title'>{t('Currency')}</h5>
                {curentCurrencies.length != 0 && curentCurrencies.map((el, idx) => (
                    <div
                    key={idx}
                    className='coin_list-item-current'>
                            <p>{el.currencieName}</p>    
                            <p>{el.currencieValue}</p>    
                            <p className='del_item' onClick={() => handleDeleteCurrentCurencies(el._id, el.currencieName)}>X</p>
                    </div>
                ))
                }
                     
            </div>
                    <div className='select_wrap_coin'>
                        <div className='name_coin'>
                            <p
                            onClick={() => setIsOpenSelect(!isOpenSelect)}
                            className='select_header'
                            >{t('Open list')} 
                            <BiDownArrow
                            className={isOpenSelect ? 'open_svg' : ''}
                            /></p>
                        </div>
                            <div className={`option_select ${isOpenSelect ? 'open' : 'close'}`}>
                                {allcurrencies.length != 0 && allcurrencies.map((el, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => handleAddCurrencie(el)}
                                        className='coin_list-item-new'>
                                            <p>{el.currencieName}</p>    
                                            <p>{el.currencieValue}</p>  
                                    </div>
                                ))}
                            </div>
                    </div>
        </div>
    </>
    );
};

export default SettingCurrency;