import React, {useEffect} from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
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
import { useTheme } from "./hooks/use-thems";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthUser } from "./store/authUser";
import { checkAuthAdministration } from "./store/authAdministration";
import { getCurrencies } from "./store/currentCurrencies";
import { currentLang } from "./store/language";
// import FirstRequest from './components/FirstRequest';
function App() {
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
    try {
      dispatch(getCurrencies());
      dispatch(currentLang());
      if(localStorage.getItem('bus-u-t')) {
        setTimeout(() => {
          dispatch(checkAuthUser());
        },500)
      }
      if(localStorage.getItem('bus-a-t')) {
        setTimeout(() => {
          dispatch(checkAuthAdministration());
        },500)
      }
    } catch(e) {
      console.log(e);
    }
  },[])

  console.log('isAuthUser',isAuthUser);


  return (
    <div className="App">
      {/* <img className='img_baner_absolute' src="./image/bus-main.svg" alt="" /> */}
      {/* <FirstRequest/> */}
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
        {/* {isAuthUser && 
        <Route path="/user-profile" element={<Profile />} />} */}
        {(isAdmin || isOperator) && 
        <Route path="/admin-panel" element={<AdminPanel />} />}
        <Route path="/trip-list" element={<BookingDerect/>} />
        <Route path="/booking-direct№" element={<DirectCurent/>} />
        <Route path="/booking-info-pas" element={<BookingInfoClient/>} />
        <Route path="/bus-seats" element={<BusSeats35/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/news№" element={<BlogItem/>} />
        <Route path="/faq" element={<FaqPage/>}/>
        <Route path="/about-ua" element={<AboutUsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/policy" element={<PoliciPage/>}/>
        <Route path="/rule" element={<RulesPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
