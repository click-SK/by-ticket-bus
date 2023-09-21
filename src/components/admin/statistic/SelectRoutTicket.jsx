import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../http/baseUrl";
import { useTranslation } from "react-i18next";
import { BiDownArrow } from "react-icons/bi";

const SelectRoutTicket = ({setSelectedRout, allRouts}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const { t } = useTranslation();

  const handleAdd = (el) => {
    setSelectedRout(el)
  };
  return (
    <div className="select_wrap_coin">
      <div className="name_coin">
        <p
          onClick={() => setIsOpenSelect(!isOpenSelect)}
          className="select_header"
        >
          {t("Open routes list")}
          <BiDownArrow className={isOpenSelect ? "open_svg" : ""} />
        </p>
      </div>
      <div className={`option_select ${isOpenSelect ? "open" : "close"}`}>
        {allRouts.length != 0 &&
          allRouts.map((el, idx) => (
            <div
              key={idx}
              onClick={() => handleAdd(el)}
              className="coin_list-item-new"
            >
              <p>{el.routName}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectRoutTicket;
