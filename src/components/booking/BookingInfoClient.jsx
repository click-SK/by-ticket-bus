import React, { useState } from "react";
import BusSeats35 from "./bus/BusSeats35";
import { Link } from "react-router-dom";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";
import { TbLuggage } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";

const BookingInfoClient = () => {
  const[seats, setSeats] = useState([])
  return (
    <div className="info_client_wrap">
      <div className="wrap_info_item info_pasanger">
        <div className="title_wrap_item">
          <p className="title_numb">1</p>
          <p className="title_text">Passengers</p>
        </div>
        <div className="input_wraper-book">
          <div className="input_item">
            <label htmlFor="first_name_pas">First name</label>
            <input id="first_name_pas" type="text" />
          </div>
          <div className="input_item">
            <label htmlFor="last_name_pas">Last name</label>
            <input id="last_name_pas" type="text" />
          </div>
        </div>
      </div>
      <div className="wrap_info_item info_reservation">
        <div className="title_wrap_item">
          <p className="title_numb">2</p>
          <p className="title_text">Seat Reservation</p>
        </div>
            <Link to='/bus-seats' className="select_seat">
            <div className="content-pas">
                <MdOutlineAirlineSeatReclineNormal className="seat_svg" />
                <p>Select you seat</p>
            </div>
            <BiRightArrow className="arow_svg" />
            </Link>
      </div>
      <div className="wrap_info_item info_reservation">
        <div className="title_wrap_item">
          <p className="title_numb">3</p>
          <p className="title_text">Extras</p>
        </div>
        <div className="select_seat">
          <div className="content-pas">
            <TbLuggage className="seat_svg" />
            <p>Included per person</p>
            <p>1 Hand Luggage | 7 kg · 42×30×18 cm</p>
            <p>1 Hold Luggage | 20 kg · 80×50×30 cm</p>
          </div>
          <BiRightArrow className="arow_svg" />
        </div>
        <div className="select_seat">
          <div className="content-pas">
            <AiOutlinePlusCircle className="seat_svg" />
            <p>Add more luggage</p>
            <p>from 4.99 eur</p>
          </div>
          <BiRightArrow className="arow_svg" />
        </div>
      </div>
      <div className="wrap_info_item info_pasanger">
        <div className="title_wrap_item">
          <p className="title_numb">4</p>
          <p className="title_text">Contact</p>
        </div>
        <div className="input_wraper-book">
          <div className="input_item">
            <label className="checked" htmlFor="email_pas">
              Email
            </label>
            <input id="email_pas" type="email" />
          </div>
          <div className="input_item">
            <label className="checked" htmlFor="phone_pas">
              Phone number
            </label>
            <input id="phone_pas" type="number" />
          </div>
        </div>
      </div>
      <div className="wrap_info_item info_pasanger">
        <div className="title_wrap_item">
          <p className="title_numb">5</p>
          <p className="title_text">Payment</p>
        </div>
        <div className="input_wraper-book-pay">
          <div className="input_item-pay">
            <input id="paypall" type="checkbox" />
            <label htmlFor="paypall"></label>
            <p>Pay pall</p>
          </div>
          <div className="input_item-pay">
            <label htmlFor="stripe"></label>
            <input id="stripe" type="checkbox" />
            <p>Stripe</p>
          </div>
        </div>
      </div>
      <div className="total_sum-book">
        <p>Total (incl. VAT) </p>
        <div className="sum_btn">
          <p>€117.98</p>
          <Link to="bus-seats">
            <button className="btn_prime">Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingInfoClient;
