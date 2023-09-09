import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../http/baseUrl";
import { useTranslation } from "react-i18next";
import { BiDownArrow } from "react-icons/bi";

const SelectRoutes = ({setSelectedRout}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [allRouts, setAllRouts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    try {
      axios.get(`${API_URL}/get-all-routes`).then((res) => {
        setAllRouts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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

export default SelectRoutes;
