import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CookieModal from "./components/CookieModal";
import Header from "./components/header/Header";
import HomePage from "./components/mainPage/HomePage";
import Footer from "./components/footer/Footer";
import LoginForm from "./components/authorization/LogInForm";
import RegistrationUserForm from "./components/authorization/RegistrationUserForm";
import Profile from "./components/profile/Profile";
import AdminPanel from "./components/admin/AdminPanel";
import AdminLogin from "./components/admin/AdminLogin";
import ErrorComponent from "./components/Error/ErrorComponent";
import BussСheme from "./components/booking/bus/BussСheme";
import BookingDerect from "./components/booking/BookingDerect";
import DirectCurent from "./components/booking/DirectCurent";
import BookingInfoClient from "./components/booking/BookingInfoClient";
import BusSeats35 from "./components/booking/bus/BusSeats35";
import BlogPage from "./components/blog/BlogPage";
import BlogItem from "./components/blog/BlogItem";
import FaqPage from "./components/faq/FaqPage";
import ContactPage from "./components/contact/ContactPage";
import AboutUsPage from "./components/aboutUs/AboutUsPage";
import PoliciPage from "./components/polici/PoliciPage";
import RulesPage from "./components/rulePage/RulePage";
import TestPdf from "./components/booking/pdf/TestPdf";
import RoutOne from "./components/admin/addRutes/RoutOne";
import AddRouts from "./components/admin/addRutes/AddRouts";
import { useTheme } from "./hooks/use-thems";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthUser } from "./store/authUser";
import { checkAuthAdministration } from "./store/authAdministration";
import { getCurrencies } from "./store/currentCurrencies";
import { currentLang } from "./store/language";
import axios from "axios";
import { API_URL } from "./http/baseUrl";
import UrbanStops from "./components/admin/addRutes/UrbanStops";
// import FirstRequest from './components/FirstRequest';
function App() {
  const [validateAdmin, setValidateAdmin] = useState(false);
  const isAuthUser = useSelector((state) => state.authUser.isAuthUser);
  const isAdmin = useSelector((state) => state.authAdmin.isAdmin);
  const isOperator = useSelector((state) => state.authAdmin.isOperator);
  const user = useSelector((state) => state.authUser.user);
  const dispatch = useDispatch();


  useEffect(() => {
    if(!window.localStorage.getItem("bus-language")) {
      window.localStorage.setItem("bus-language",'ESP')
    }
  },[])

  useEffect(() => {
    let currenciesNameFromStorage = window.localStorage.getItem("curentRate");
    if (!currenciesNameFromStorage) {
      window.localStorage.setItem("curentRate", 'EUR');
    }
    let existingCurrencies = [];
  
    axios.get(`${API_URL}/get-all-current-currencies`)
      .then((res) => {
        res.data.forEach((item) => {
          existingCurrencies.push(item.currencieName);
        });
  
      if(!existingCurrencies.includes(currenciesNameFromStorage)) {
        window.localStorage.setItem("curentRate", 'EUR');
        dispatch(getCurrencies());
      }
      })
      .catch((error) => {
        console.error('Request error:', error);
      });
  }, []);


  useEffect(() => {
    try {
      dispatch(getCurrencies());
      dispatch(currentLang());
      if(localStorage.getItem('bus-u-t')) {
        setTimeout(() => {
          dispatch(checkAuthUser());
        },1000)
      }

      if(localStorage.getItem('bus-a-t')) {
        setTimeout(() => {
          dispatch(checkAuthAdministration());
        },1000)
    }
    } catch(e) {
      console.log(e);
    }
  },[])

  return (
    <div className="App">
      <CookieModal/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<AdminLogin />} />
        <Route path="/404" element={<ErrorComponent />} />
        {!isAuthUser && 
        <>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration-user" element={<RegistrationUserForm />} />
        </>}
        <Route path="/user-profile" element={<Profile />} />
        {(isAdmin || isOperator) && 
        <Route path="/admin-panel" element={<AdminPanel />} />}
        <Route path="/trip-list" element={<BookingDerect/>} />
        <Route path="/booking-direct№" element={<DirectCurent/>} />
        <Route path="/booking-info-pas" element={<BookingInfoClient/>} />
        <Route path="/bus-seats" element={<BusSeats35/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/blog/:id" element={<BlogItem/>} />
        <Route path="/faq" element={<FaqPage/>}/>
        <Route path="/about-ua" element={<AboutUsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/policy" element={<PoliciPage/>}/>
        <Route path="/rule" element={<RulesPage/>}/>
        <Route path="/pdf-test" element={<TestPdf/>}/>
        <Route path="/urban" element={<UrbanStops/>}/>
        <Route path='/rout/:id' element={<RoutOne/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
