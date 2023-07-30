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
      try {
        i18n.changeLanguage(e);
        setLanguage(e);
        dispatch(currentLang());
      } catch(e) {
        console.log(e);
      }
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