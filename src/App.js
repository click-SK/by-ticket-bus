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
import { useTheme } from "./hooks/use-thems";

function App() {
  const { them, setTheme } = useTheme();
  const style = [
    {
      name: "purpule",
      colorBgPrime: "#F6F7F1",
      colorBgSecond: " #DDD",
      colorTextTitle: "#393939",
      colorText: "#393939",
      colorBtn: " #fff",
      colorBtnHover: " #ff9d2d",
      colorPrime: "#E5C51C",
      colorSecond: "#1C54E5",
    },
  ];
  return (
    <div className="App">
      {/* <img className='img_baner_absolute' src="./image/bus-main.svg" alt="" /> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration-user" element={<RegistrationUserForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/edit" element={<AdminLogin />} />
        <Route path="/404" element={<ErrorComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
