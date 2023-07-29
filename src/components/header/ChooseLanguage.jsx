// import React, { useEffect, useState } from 'react';
// import { AiOutlineDown } from 'react-icons/ai'

// const CurentLang = () => {
    // const [isOpen, setIsOpent] = useState(false);
    // const [curenLang, setCurentLang] = useState(localStorage.getItem('curentLang') || 'ENG')
    // const [curentLangIcon, setCurentLangIcon] = useState('./lang/eng.svg')
    
    // const hendlerChangeLang = (e) =>{
    //     const curentContent = e?.name;
    //     setCurentLang(curentContent)
    //     localStorage.setItem('curentLang', curentContent)
    //     setCurentLangIcon(e?.imgSrc)
    //     setIsOpent(!isOpen)
    // }

    // useEffect ( () =>{
    //     try {
    //         if (localStorage.getItem('curentLang') === 'ENG'){
    //             setCurentLangIcon('./lang/eng.svg ')
    //         } else {
    //             setCurentLangIcon('./lang/spain.svg ');
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },[])

//     const langArr = [
//         {
//             imgSrc : './lang/eng.svg ',
//             name: 'ENG'
//         },
//         {
//             imgSrc : './lang/spain.svg ',
//             name: 'SPAIN'
//         }
//     ]
    
//     return (
    //     <div className='change_lang'> 
    //     <p className='p-header'>Language</p>
    //     <div className='lang_img_wrap'
    //     onClick={() => setIsOpent(!isOpen)}
    //     >
    //         <img 
    //         className='color'
    //         src={curentLangIcon} alt="eng" />
    //         <AiOutlineDown
    //         className='icon'/>
    //     </div>
    //     {isOpen && 
    //     <div className='lang_var_wrap'>
    //         {langArr.map((item, idx) => (
    //             <img 
    //             key={idx}
    //             onClick={(e) => hendlerChangeLang(item)} 
    //             className='color'
    //             src={item.imgSrc} alt="eng" />
    //         ))}
    //     </div>
    //     }
    // </div>
//     );
// };

// export default CurentLang;


import React, {useState, useEffect} from 'react';
import i18n from '../../i18n';
import { currentLang } from '../../store/language';
import { useSelector, useDispatch } from 'react-redux';
import useLocalStorage from '../../hooks/use-localstorage';
import { AiOutlineDown } from 'react-icons/ai'
import '../../style/choseLanguage.scss'
const ChooseLanguage = () => {
    const [isOpen, setIsOpent] = useState(false);
    const [curentLangIcon, setCurentLangIcon] = useState('./lang/eng.svg')
    const dispatch = useDispatch();
    const [language, setLanguage] = useLocalStorage('bus-language', 'Sp');
    const lang = useSelector((state) => state.lang.language);

    console.log('lang',lang);

    useEffect ( () =>{
        try {
            if (lang === 'En'){
                setCurentLangIcon('./lang/eng.svg ')
            } else {
                setCurentLangIcon('./lang/spain.svg ');
            }
        } catch (error) {
            console.log(error)
        }
    },[])


    const handleLenguageChange = (e) => {
        console.log('e',e);
        i18n.changeLanguage(e);
        setLanguage(e);
        dispatch(currentLang());
    };

    return (
      <div className="change_lang">
        <p className="p-header">{lang}</p>
        <div className="lang_img_wrap" onClick={() => setIsOpent(!isOpen)}>
          <AiOutlineDown className="icon" />
        </div>
        {isOpen && (
          <div className="lang_var_wrap">
            <div
              onClick={() => handleLenguageChange("Sp")}
              className='chose_lang_item'
            >
              Sp
            </div>
            <div
              onClick={() => handleLenguageChange("En")}
              className='chose_lang_item'
            >
              En
            </div>
          </div>
        )}
      </div>
    );
};

export default ChooseLanguage;