import React, { useState } from 'react';
import { BiDownArrow } from 'react-icons/bi';

const SettingSite = () => {

    const [isAddCoin, setIsAddCoin] = useState(false)
    const [curencyCoin, setCurencyCoin] = useState('Open list')
    const [isOpenSelect, setIsOpenSelect] = useState('')
    const [coinList, setCoinList] = useState([
        {
            name: 'usd',
            rate: 1.11
        },
        {
            name: 'euro',
            rate: 1
        },
    ])
    const [curencyList, setCurencyLList] = useState([
        {
            name: 'usd',
            rate: 1.11
        },
        {
            name: 'euro',
            rate: 1
        },
        {
            name: 'uah',
            rate: 40.87
        },
        {
            name: 'gbp',
            rate: 0.86
        },
    ])

    const hendlerAddCoin = (e) => {
        console.log(e);
        setCoinList([
            e,
            ...coinList
        ])
    }

    console.log(coinList);

    return (
        <div className='admin_content_wrap'>
        <h2>Setting site</h2>
        <div className='admin_panel_items coin_wrap'>
            <div className='add_coin'>
                <button
                onClick={() => setIsAddCoin(true)}
                className='ernings_wraper-item admin_panel_items add_user_button active_btn_user' >Add currency</button>
            </div>
            <div className='coin_list'>
                <h5 className='content_title'>Curency</h5>
                {coinList.map((el, idx) => (
                    <div
                    key={idx}
                    className='coin_list-item'>
                            <p>{el.name}</p>    
                            <p>{el.rate}</p>    
                    </div>
                ))
                }
                {isAddCoin && 
                    <div className='select_wrap_coin'>
                        <div className='name_coin'>
                            <p
                            onClick={() => setIsOpenSelect(!isOpenSelect)}
                            className='select_header'
                            >{curencyCoin} 
                            <BiDownArrow
                            className={isOpenSelect ? 'open_svg' : ''}
                            /></p>
                        </div>
                            <div className={`option_select ${isOpenSelect ? 'open' : 'close'}`}>
                                {curencyList.map((el, idx) => (
                                    <div
                                        key={idx}
                                        onClick={(e) => hendlerAddCoin(el)}
                                        className='coin_list-item'>
                                            <p>{el.name}</p>    
                                            <p>{el.rate}</p>  
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

export default SettingSite;