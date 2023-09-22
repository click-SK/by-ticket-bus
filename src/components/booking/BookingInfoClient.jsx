import React, { useEffect, useState } from "react";
import BusSeats35 from "./bus/BusSeats35";
import axios from 'axios';
import { API_URL } from "../../http/baseUrl";
import { PDFViewer } from '@react-pdf/renderer';
import TicketTamplate from "./pdf/TicketTamplate";
import TicketView from "./pdf/TicketView";
import QRCode from 'qrcode.react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";
import { TbLuggage } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";

const BookingInfoClient = () => {
  const [seats, setSeats] = useState([]);
  const curentSeats = useSelector(state => state.busSeats.curentSeats);
  const [firstName, setFirstName] = useState('');
  const [lustName, setLustName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pdfBlob, setPdfBlob] = useState(null);
  const [pdfFileData, setPdfFileData] = useState([])
  // const qrCodeImageUrl = QRCode.toDataURL('http://localhost:3000/booking-info-pas');
  const {RDX_routeObject} = useSelector((state) => state.booking);
  const {user} = useSelector((state) => state.authUser.user);

  useEffect (() => {
    setTimeout(() => {
      const userFirstName = user?.firstName
      const userLastName = user?.lastName
      const userMail = user?.email
      const userPhone = user?.phone
      setSeats(curentSeats)
      setFirstName(userFirstName)
      setLustName(userLastName)
      setEmail(userMail)
      setPhone(userPhone)
      
    }, 500);
  },[])

  useEffect (() => {
    setPdfFileData(
      {
        fName : firstName,
        lName : lustName,
        seats:curentSeats,
        email:email,
        phone:phone,
        // qr: qrCodeImageUrl
      }
    )
  },[firstName,lustName, curentSeats, email, phone ])

  const dispatch = useDispatch();

  const handleGeneratePdf = async () => {
    const blob = new Blob([<TicketTamplate />], { type: 'application/pdf' });
    setPdfBlob(blob); // Зберегти PDF в стані

  };
  
  const handleBuyTicket = () => {
    try{
      axios.patch(`${API_URL}/buy-ticket`, {
        routName: RDX_routeObject.routName,
        cityFrom: RDX_routeObject.startRout,
        cityTo: RDX_routeObject.endRout,
        timeFrom: RDX_routeObject.timeStart,
        timeTo: RDX_routeObject.timeEnd,
        seatNumbers: seats,
        firstName,
        lastName: lustName,
        email,
        phone,
        userId: user._id
      }).then(() => {
        handleGeneratePdf();
      }).catch((error) => {
        console.log(error);
      })
    }catch(error) {
      console.log('Request error',error);
    }
  }

  console.log('RDX_routeObject',RDX_routeObject);
  console.log('user',user);
  console.log('seats',seats);


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
            <input id="first_name_pas" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="input_item">
            <label htmlFor="last_name_pas">Last name</label>
            <input id="last_name_pas" type="text" value={lustName} onChange={(e) => setLustName(e.target.value)} />
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
                <div className="seat-wraper">{seats.length !== 0 ? 
                seats.map((item,idx) => (
                  <p key={idx}>{item.length == 1 ? `${item} seat` : ''}</p>
                )) : 
                <p>Select you seat</p>}</div>
            </div>
            <BiRightArrow className="arow_svg" />
            </Link>
      </div>
      <div className="wrap_info_item info_pasanger">
        <div className="title_wrap_item">
          <p className="title_numb">3</p>
          <p className="title_text">Contact</p>
        </div>
        <div className="input_wraper-book">
          <div className="input_item">
            <label className="checked" htmlFor="email_pas">
              Email
            </label>
            <input id="email_pas" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input_item">
            <label className="checked" htmlFor="phone_pas">
              Phone number
            </label>
            <input id="phone_pas" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="wrap_info_item info_pasanger">
        <div className="title_wrap_item">
          <p className="title_numb">4</p>
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
        <div>
        <p>Total (incl. VAT) </p>
          <p>Date</p>
          <p>City From - 1</p>
          <p>City To - 2</p>
          <p>Time</p>

        </div>
        <div className="sum_btn">
          <p>€117.98</p>
          <PDFDownloadLink 
          document={<TicketTamplate 
                    data = {pdfFileData}
                    />} 
          fileName="bus_ticket.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading...' : (
                <button className="btn_prime" onClick={handleBuyTicket}>Buy</button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default BookingInfoClient;
