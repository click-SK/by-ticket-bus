import React, { useState, useEffect } from "react";
import i18n from "../../i18n";
import { currentLang } from "../../store/language";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDown } from "react-icons/ai";
import "../../style/choseLanguage.scss";
const ChooseLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [curentLangIcon, setCurentLangIcon] = useState("./lang/eng.svg");
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(localStorage.getItem('bus-language' || 'ESP'))
  const lang = useSelector((state) => state.lang.language);

  useEffect(() => {
    try {
      if (lang === "ENG") {
        setCurentLangIcon("./lang/eng.svg ");
      } else {
        setCurentLangIcon("./lang/spain.svg ");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLenguageChange = (e) => {
    try {
      i18n.changeLanguage(e);
      setLanguage(e);
      dispatch(currentLang());
      localStorage.setItem('bus-language', e);
      setIsOpen(false);
    } catch(e) {
      console.log(e);
    }
  };

  return (
    <div className="change_lang">
      <p className="p-header">{lang}</p>
      <div className="lang_img_wrap" onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineDown className="icon" />
      </div>
      {isOpen && (
        <div className="lang_var_wrap">
          <div
            onClick={() => handleLenguageChange("ESP")}
            className="chose_lang_item"
          >
            ESP
          </div>
          <div
            onClick={() => handleLenguageChange("ENG")}
            className="chose_lang_item"
          >
            ENG
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseLanguage;