import logo from "./logo.svg";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
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
import { useTheme } from "./hooks/use-thems";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthUser } from "./store/authUser";
import { checkAuthAdministration } from "./store/authAdministration";
import { getCurrencies } from "./store/currentCurrencies";
import { useEffect } from "react";

function App() {
  const isAuthUser = useSelector((state) => state.authUser.isAuthUser);
  const isAdmin = useSelector((state) => state.authAdmin.isAdmin);
  const isOperator = useSelector((state) => state.authAdmin.isOperator);
  const user = useSelector((state) => state.authUser.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCurrencies());
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
  },[])


  return (
    <div className="App">
      {/* <img className='img_baner_absolute' src="./image/bus-main.svg" alt="" /> */}
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
        {isAuthUser && 
        <Route path="/user-profile" element={<Profile />} />}
        {(isAdmin || isOperator) && 
        <Route path="/admin-panel" element={<AdminPanel />} />}
        <Route path="/bus" element={<BookingDerect/>} />
        <Route path="/booking-direct№" element={<DirectCurent/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
