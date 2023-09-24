import React, { useRef, useEffect, useState } from 'react';
import '../../../style/custom.css'
import { Link } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import TicketTamplate from '../pdf/TicketTamplate';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useDispatch, useSelector } from 'react-redux';
import BusImgSvg from './BusImgSvg';
// import '../../../style/media-query.css'

const PreviewTicket = () => {
    const curentSeats = useSelector(state => state.busSeats.curentSeats);
    const [seats, setSeats] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lustName, setLustName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const {RDX_routeObject} = useSelector((state) => state.booking);
    const {user} = useSelector((state) => state.authUser.user);
    const [allRout, setAllRout] = useState([]);
    const [allDirection, setAllDirection] = useState([]);
    const [selectRout, setSelectedRout] = useState([]);
    const [matchingRoutes, setMatchingRoutes] = useState([]);
    const [price, setPrice] = useState(0);
    const [tax, setTax] = useState(21);
	const [pdfFileData, setPdfFileData] = useState([])
	const [pdfBlob, setPdfBlob] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/get-all-routes`)
        .then((res) => {
            setAllRout(res.data);
        }).catch((error) => {
            console.log('Request error',error);
        })
    },[])
    useEffect(() => {
        axios.get(`${API_URL}/get-all-directions`)
        .then((res) => {
            setAllDirection(res.data);
        }).catch((error) => {
            console.log('Request error',error);
        })
    },[allRout])
    useEffect(() => {
        axios.get(`${API_URL}//get-all-origin-directions`)
        .then((res) => {
			const allStopsRout = res.data
            // setSelectedRout(allStopsRout[0].allStops);
            setSelectedRout(res.data);
        }).catch((error) => {
            console.log('Request error',error);
        })
    },[allRout])

    useEffect (() => {
        const selectedRoutName = RDX_routeObject.routName;
        const matchingRoutes = allDirection.filter(route => route.routName === selectedRoutName);
        setMatchingRoutes(matchingRoutes)
        setPrice(RDX_routeObject.price * RDX_routeObject.distance)
    },[allRout])

    useEffect (() => {
        setSeats(curentSeats)
    },[curentSeats])

    useEffect (() => {
        const userFirstName = user?.firstName
        const userLastName = user?.lastName
        const userMail = user?.email
        const userPhone = user?.phone
        setFirstName(userFirstName)
        setLustName(userLastName)
        setEmail(userMail)
        setPhone(Number(userPhone))
    },[user])

	useEffect (() => {
		setPdfFileData(
		  {
			fName : firstName,
			lName : lustName,
			seats:curentSeats,
			seatsLength:seats.length,
			email:email,
			phone:phone,
			selectRout:selectRout,
			price: price.toFixed(2),
			tax: tax
			
			// qr: qrCodeImageUrl
		  }
		)
	  },[firstName,lustName, curentSeats, email, phone ])

	  const handleGeneratePdf = async () => {
		const blob = new Blob([<TicketTamplate />], { type: 'application/pdf' });
		setPdfBlob(blob); // Зберегти PDF в стані
	
	  };

	  const handleBuyTicket = () => {
		  handleGeneratePdf();
	}

    console.log('RDX_routeObject', RDX_routeObject);
    console.log('allRout', allRout);
    console.log('allDirection', allDirection);
    console.log('matchingRoutes', matchingRoutes);
    console.log('selectRout', selectRout);


    return (
    <div className='preview_wrap'>
    <div className='invoice_wrap'>
		<div className="invoice-container">
			<div className="invoice-content-wrap dark-invoice-content-wrap" id="download_section">
					<header className="invoice-header content-min-width bus-header" id="invo_header">
						<div className="invoice-logo-content">
							<div className="invoice-logo">
                                <img src="" alt="" />
								{/* <img src="../assets/images/logo/logo.png" alt="this is a invoice logo"> */}
							</div>
							<BusImgSvg/>
						</div>
					</header>
					<div className="bus-invo-no-date-wrap">
						<div className="bus-invo-num">
							<span className="bus-invo-ntitle inter-700 medium-font">Invoice No:</span>
							<span className="bus-invo-nnum inter-400 medium-font">#DI56789</span>
						</div>
						<div className="bus-invo-date">
							<span className="bus-invo-dtitle inter-700 medium-font">Invoice Date:</span>
							<span className="bus-invo-ddate inter-400 medium-font">30/11/2022</span>
						</div>
					</div>

				<section className="bus-booking-content dark-content-section" id="bus_booking">
					<div className="container">

						<div className="invoice-owner-conte-wrap">
							<div className="invo-to-wrap">
								<div className="invoice-to-content">
									<p className="invo-to inter-700 medium-font w-text mtb-0">Passenger Info:</p>
									<h1 className="invo-to-owner inter-700 md-lg-font">{firstName} {lustName}</h1>
									<p className="invo-owner-address medium-font inter-400 mtb-0">Phone: +{phone} </p>
									<p className="invo-owner-address medium-font inter-400 mtb-0">Email: {email}</p>
								</div>
							</div>
							<div className="invo-pay-to-wrap">
								<div className="invoice-pay-content">
									<p className="invo-to inter-700 medium-font w-text mtb-0">Agency Info:</p>
									<h2 className="invo-to-owner inter-700 md-lg-font">Digital Invoico Busline</h2>
									<p className="invo-owner-address medium-font inter-400 mtb-0">4510 E Dolphine St, IN 3526 </p>
									<p className="invo-owner-address medium-font inter-400 mtb-0">Hills Road, New York, USA</p>
								</div>
							</div>
						</div>

						<div className="invoice-timing-wrap">
							<div className="invo-time-col">
								<div className="booking-info column-one">
									{/* <p className="second-color sm-md-text"><b className="w-text circle">From: </b>{RDX_routeObject?.startRout}</p> */}
									<p className="second-color sm-md-text"><b className="w-text circle">From: </b>{selectRout.length !== 0 && selectRout[0]?.startRout}</p>
									{selectRout.length !==0 && selectRout.map((item,idx) => (
										item.allStops.map((el,id) => (
											<p className="second-color sm-md-text"><b className="w-text circle">{item.allStops.length -1 == id && 'To:' } </b>{el.end }</p>
										))
									))}
									{/* <p className="second-color sm-md-text"><b className="w-text circle">To: </b>{RDX_routeObject?.endRout}</p> */}
								</div>
							</div>
							<div className="invo-time-col">
								<div className="booking-info">
									<p className="second-color sm-md-text"><b className="w-text circle">Department Time: </b>{selectRout.length !== 0 && selectRout[0]?.timeStart} AM</p>
									{selectRout.length !==0 && selectRout.map((item,idx) => (
										item.allStops.map((el,id) => (
											<p className="second-color sm-md-text"><b className="w-text circle">{item.allStops.length -1 == id && 'Arrive Time:' } </b>{el.timeEnd }</p>
										))
									))}
									{/* <p className="second-color sm-md-text"><b className="w-text circle">Arrive Time: </b>{RDX_routeObject?.timeEnd} PM</p> */}
								</div>
							</div>
						</div>

						<div className="bus-detail-wrap dark-bus-detail-wrap">
							<div className="bus-detail-col border-bottom">
								<div className="bus-type w-text inter-700 medium-font">Bus Type:</div>
								<div className="bus-tname second-color inter-400 medium-font">Volvo AC</div>
							</div>
							<div className="bus-detail-col border-bottom">
								<div className="bus-type w-text inter-700 medium-font">Bus Number:</div>
								<div className="bus-tname second-color inter-400 medium-font">10DIB</div>
							</div>
							<div className="bus-detail-col seat-col">
								<div className="bus-type w-text inter-700 medium-font">Seat No:</div>
								<div className="bus-tname second-color inter-400 medium-font">{seats}</div>
							</div>
							<div className="bus-detail-col ticket-col">
								<div className="bus-type w-text inter-700">Ticket Pnr:</div>
								<div className="bus-tname second-color inter-400 medium-font">23156-89512</div>
							</div>
						</div>

						<div className="table-wrapper dark-table">
							<table className="invoice-table bus-detail-table">
								<thead>
									<tr className="invo-tb-header">
										<th className="invo-table-title sno-wid inter-700 medium-font">Details</th>
										<th className="invo-table-title re-price-wid rate-title inter-700 medium-font">Price</th>
										<th className="invo-table-title re-qty-wid rate-title inter-700 medium-font">Qty</th>
										<th className="invo-table-title tota-wid inter-700 medium-font total-head">Total</th>
									</tr>
								</thead>
								<tbody className="invo-tb-body">
									<tr className="invo-tb-row">
										<td className="invo-tb-data">Delux Business Seat</td>
										<td className="invo-tb-data rate-data">$ {price.toFixed(2)}</td>
										<td className="invo-tb-data rate-data">{seats.length}</td>
										<td className="invo-tb-data total-data">$ {price.toFixed(2) * seats.length}</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="invo-addition-wrap">
							<div className="invo-add-info-content bus-term-cond-content">
								<h3 className="addi-info-title inter-700 medium-font w-text">Terms & Condition:</h3>
								<div className="term-condi-list">
									<ul className="term-con-list">
										<li className="term-cond-item inter-400 sm-md-text second-color">When traveling, keep a print out of your ticket.</li>
										<li className="term-cond-item inter-400 sm-md-text second-color">Please keep your id proof when traveling.</li>
										<li className="term-cond-item inter-400 sm-md-text second-color">Come to the bus counter 5 minutes before the bus leaves.</li>
										<li className="term-cond-item inter-400 sm-md-text second-color">A person cannot take more than 30 kg of luggage.</li>
										<li className="term-cond-item inter-400 sm-md-text second-color">To return the ticket, you must be informed at least 2 days in advance.</li>
									</ul>
								</div>
							</div>
							<div className="invo-bill-total bus-invo-total dark-invo-bill">
								<table className="invo-total-table">
									<tbody>
										<tr>
											<td className="inter-700 medium-font w-text hotel-sub">Sub Total:</td>
											<td className="invo-total-data inter-400 medium-font second-color">$ {price.toFixed(2) * seats.length}</td>
										</tr>
										<tr className="tax-row bottom-border">
											<td className="inter-700 medium-font w-text hotel-sub">Tax <span className="invo-total-data inter-700 medium-font second-color">(18%)</span></td>
											<td className="invo-total-data inter-400 medium-font second-color">$ {tax}</td>
										</tr>
										<tr className="invo-grand-total">
											<td className="inter-700 sm-text primary-color hotel-sub">Grand Total:</td>
											<td className="sm-text w-text invo-total-price">$ {(price.toFixed(2) * seats.length) - tax}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className="bus-conta-mail-wrap">
							<div className="bus-invo-num bus-contact">
								<span className="bus-conatct-img">
                                    {/* <img src="../assets/images/bus/call.svg" alt="this is call image"> */}

                                    </span>
								<a className="bus-invo-contact inter-400 sm-text w-text" href="tel:+12345678899">+1 234 567 8899</a>
							</div>
							<div className="bus-invo-date bus-mail">
								<span className="bus-mail-img">
                                    {/* <img src="../assets/images/bus/mail.svg" alt="this is mail image"> */}

                                    </span>
								<a className="bus-invo-mail inter-400 sm-text w-text" href="mailto:contact@invoice.com">contact@invoice.com</a>
							</div>
						</div>


						<p className="mtb-0 thank-you-content inter-400 w-text">Thank you for choosing to 🚌 travelling 🚌 with us. See you soon 🙂</p>
					</div>
				</section>

			</div>


			<section className="agency-bottom-content d-print-none" id="agency_bottom">
				<div className="container">

					<div className="invo-buttons-wrap">
						<div className="invo-print-btn invo-btns">
							<a
							//  href="javascript:window.print()" 
							onClick={handleGeneratePdf}
							 className="print-btn">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5_313)">
									<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 7H10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 13H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 17H15" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_5_313"><rect width="24" height="24" fill="white"/>
									</clipPath></defs></svg>
								<span className="inter-700 medium-font" >Print</span>
							</a>
						</div>
						<div className="invo-down-btn invo-btns">
							<a  className="download-btn" id="generatePDF">
								{/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5_246)">
									<path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 11L12 16L17 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_5_246"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
								<span className="inter-700 medium-font">Download</span> */}
							<PDFDownloadLink 
									document={<TicketTamplate 
												data = {pdfFileData}
												/>} 
									fileName="bus_ticket.pdf">
										{({ blob, url, loading, error }) =>
										loading ? 'Loading...' : (
											<>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5_246)">
											<path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 11L12 16L17 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_5_246"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
											<span className="inter-700 medium-font" onClick={handleGeneratePdf}>Download</span>
											</>
										)
										}
								</PDFDownloadLink>
							</a>
						</div>
					</div>

					<div className="invo-note-wrap">
						<div className="note-title">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_8_240)"><path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 7H10" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 13H15" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 17H15" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_8_240"><rect width="24" height="24" fill="white"/>
							</clipPath></defs></svg>
							<span className="inter-700 medium-font">Note:</span>
						</div>
						<h3 className="inter-400 medium-font second-color note-desc mtb-0">This is computer generated receipt and does not require physical signature.</h3>
					</div>
				</div>
			</section> 

		</div>
	</div>
    </div>
    );
};

export default PreviewTicket;