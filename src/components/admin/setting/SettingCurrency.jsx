import React, { useState, useEffect } from 'react';
import { BiDownArrow } from 'react-icons/bi';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
const SettingCurrency = () => {
    const [reloadState, setReloadState] = useState(false);
    const [allcurrencies, setAllCurrencies] = useState([]);
    const [isAddCoin, setIsAddCoin] = useState(false)
    const [curencyCurrencies, setCurrentCurrencies] = useState([])
    const [isOpenSelect, setIsOpenSelect] = useState('')

    useEffect(() => {
        axios.get(`${API_URL}/get-all-default-currencies`)
        .then((res) => {
            setAllCurrencies(res.data[0].currencies);
        })
    },[])

    useEffect(() => {
        axios.get(`${API_URL}/get-all-current-currencies`)
        .then((res) => {
            setCurrentCurrencies(res.data)
        })
    },[reloadState])

    const handleAddCurrencie = (e) => {
        const {currencieName, currencieValue} = e;
        const arrayCurrenciesNames = curencyCurrencies.map(item => item.currencieName);
        const boolean = arrayCurrenciesNames.includes(currencieName);
        if(!boolean) {
            axios.post(`${API_URL}/create-current-currencies`, {currencieName, currencieValue})
            .then(() => {
                setTimeout(() => {
                    setReloadState((state) => !state);
                },500)
              })
        } else {
            alert('This currency has already been added')
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
        } else {
            alert('You cannot delete this currency')
        }
    }

    return (
        <div className='admin_content_wrap'>
        <h2>Setting site</h2>
        <div className='admin_panel_items coin_wrap'>
            <div className='add_coin'>
                <button
                onClick={() => setIsAddCoin(!isAddCoin)}
                className='ernings_wraper-item admin_panel_items add_user_button active_btn_user' >Add currency</button>
            </div>
            <div className='coin_list'>
                <h5 className='content_title'>Curency</h5>
                {curencyCurrencies.length != 0 && curencyCurrencies.map((el, idx) => (
                    <div
                    key={idx}
                    className='coin_list-item-current'>
                            <p>{el.currencieName}</p>    
                            <p>{el.currencieValue}</p>    
                            <p onClick={() => handleDeleteCurrentCurencies(el._id, el.currencieName)}>X</p>
                    </div>
                ))
                }
                {isAddCoin && 
                    <div className='select_wrap_coin'>
                        <div className='name_coin'>
                            <p
                            onClick={() => setIsOpenSelect(!isOpenSelect)}
                            className='select_header'
                            >Open list 
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
                }      
            </div>
        </div>
    </div>
    );
};

export default SettingCurrency;