import React, { useEffect, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai'

const CurentLang = () => {
    const [isOpen, setIsOpent] = useState(false);
    const [curenLang, setCurentLang] = useState(localStorage.getItem('curentLang') || 'ENG')
    const [curentLangIcon, setCurentLangIcon] = useState('./lang/eng.svg')
    
    const hendlerChangeLang = (e) =>{
        const curentContent = e?.name;
        setCurentLang(curentContent)
        localStorage.setItem('curentLang', curentContent)
        setCurentLangIcon(e?.imgSrc)
        setIsOpent(!isOpen)
    }

    useEffect ( () =>{
        try {
            if (localStorage.getItem('curentLang') === 'ENG'){
                setCurentLangIcon('./lang/eng.svg ')
            } else {
                setCurentLangIcon('./lang/spain.svg ');
            }
        } catch (error) {
            console.log(error)
        }
    },[])

    const langArr = [
        {
            imgSrc : './lang/eng.svg ',
            name: 'ENG'
        },
        {
            imgSrc : './lang/spain.svg ',
            name: 'SPAIN'
        }
    ]
    
    return (
        <div className='change_lang'> 
        <p className='p-header'>Language</p>
        <div className='lang_img_wrap'
        onClick={() => setIsOpent(!isOpen)}
        >
            <img 
            className='color'
            src={curentLangIcon} alt="eng" />
            <AiOutlineDown
            className='icon'/>
        </div>
        {isOpen && 
        <div className='lang_var_wrap'>
            {langArr.map((item, idx) => (
                <img 
                key={idx}
                onClick={(e) => hendlerChangeLang(item)} 
                className='color'
                src={item.imgSrc} alt="eng" />
            ))}
        </div>
        }
    </div>
    );
};

export default CurentLang;