import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../http/baseUrl";
import { useTranslation } from "react-i18next";
import { BiDownArrow } from "react-icons/bi";
import '../../../style/statisticAdmin.scss'

const SelectRoutTicket = ({setSelectedRout, allRouts, selectRout}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [boughtTickets, setBoughtTickets] = useState([])
  const [freeTickets, setfreeTickets] = useState([])
  const { t } = useTranslation();

  const handleAdd = (el) => {
    setSelectedRout(el)
  };

  useEffect(() => {
    const boughtTickets = selectRout?.tickets.filter(ticket => ticket.status.bought);
    const freeTickets = selectRout?.tickets.filter(ticket => ticket.status.free);
    setBoughtTickets(boughtTickets);
    setfreeTickets(freeTickets);
  },[selectRout])

  console.log('boughtTickets?.seatNumber', boughtTickets);

  return (
    <div className="admin_panel_items content_additional_page_edit">
      <h2>Tickets</h2>
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
      <div className="select_wrap_coin ticket_sold-wrap">
              <div className="ticket_pci"> <p>All seats - <span>{selectRout ? `${selectRout?.tickets?.length} pci :` : '0'}</span></p> </div>
              <div className="ticket_pci"> <p>Sold -  <span>{selectRout ? `${boughtTickets?.length} pci :` : '0'}</span></p>
              <div className="ticket_number_seats">
                {boughtTickets &&
                  boughtTickets.map((el,id) => (
                  <span >{selectRout ? el.seatNumber : ''}</span>
                ))}
              </div>
              </div>
              <div className="ticket_pci"> <p>Booked - <span>{selectRout ? '0 pci :' : '0'} </span></p></div>
              <div className="ticket_pci"> <p>Free for sale -  <span>{selectRout ?  `${freeTickets?.length} pci :` : '0'}</span></p>
              <div className="ticket_number_seats">
                {freeTickets &&
                  freeTickets.map((el,id) => (
                  <span >{selectRout ? el.seatNumber : ''}</span>
                ))}
              </div>
              </div>
      </div>     
    </div>
  );
};

export default SelectRoutTicket;
