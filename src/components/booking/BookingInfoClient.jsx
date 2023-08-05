import React, { useEffect, useState } from "react";
import BusSeats35 from "./bus/BusSeats35";
import axios from 'axios';
import { PDFViewer } from '@react-pdf/renderer';
import TicketTamplate from "./pdf/TicketTamplate";
import QRCode from 'qrcode.react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";
import { TbLuggage } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";
// import { useSelector } from 'react-redux';

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

  useEffect (() => {
    setSeats(curentSeats)
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
    console.log('testtt',<TicketTamplate/>);
    try {
      // const response = await axios.post('/api/save-pdf', pdfBlob, {
      //   headers: {
      //     'Content-Type': 'application/pdf',
      //   },
      // });

      // console.log('PDF збережено на сервері', response.data);
    } catch (error) {
      console.error('Помилка при збереженні PDF на сервері', error);
    }
  };


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
                <p>{seats.length !== 0 ? seats : 'Select you seat'}</p>
            </div>
            <BiRightArrow className="arow_svg" />
            </Link>
      </div>
      {/* <div className="wrap_info_item info_reservation">
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
      </div> */}
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
        <p>Total (incl. VAT) </p>
        <div className="sum_btn">
          <p>€117.98</p>
          <PDFDownloadLink 
          document={<TicketTamplate 
                    data = {pdfFileData}
                    />} 
          fileName="bus_ticket.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading...' : (
                <button className="btn_prime" onClick={handleGeneratePdf}>Buy</button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default BookingInfoClient;
