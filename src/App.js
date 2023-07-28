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

  console.log('isAdmin',isAdmin);
  console.log('isOperator',isOperator);
  // const style = [
  //   {
  //     name: "purpule",
  //     colorBgPrime: "#F6F7F1",
  //     colorBgSecond: " #DDD",
  //     colorTextTitle: "#393939",
  //     colorText: "#393939",
  //     colorBtn: " #fff",
  //     colorBtnHover: " #ff9d2d",
  //     colorPrime: "#E5C51C",
  //     colorSecond: "#1C54E5",
  //   },
  // ];

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
        <Route path="/bus" element={<BussСheme/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
