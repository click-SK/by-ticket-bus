import React, { useEffect, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import "../../style/loginForm.scss";
import { Link } from "react-router-dom";
import LoginTemplate from './LoginTemplate';
import ErrorComponent from "../Error/ErrorComponent";
import { useNavigate } from "react-router-dom";
import {login} from '../../store/authUser.js'
import { useDispatch, useSelector } from "react-redux";
const LoginForm = () => {
  const [isUser, setIsUser] = useState(true);
  const [isPartner, setIsPartner] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleShowUserLogin = () => {
    setIsUser(true);
    setIsPartner(false);
  }
  const handleShowPartnerLogin = () => {
    setIsPartner(true);
    setIsUser(false);
  }

  const handleLoginUser = (email, password) => {
    try {
      dispatch(login({email, password}))
    } catch(e) {
      console.log(e);
      return navigate('/404');
    }
  }
  const handleRegistrationUser = (email, password) => {
    try {

    } catch(e) {
      console.log(e);
    }
  }
  const handleLoginPartner = (email, password) => {
    try {

    } catch(e) {
      console.log(e);
    }
  }

  const handleRegistrationPartner = (email, password) => {
    try {

    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className="login_wrap">
      <div className="left_block">
        <Link style={{ textAlign: "left", width: "100%" }} to="/">
          <p className="back_home_login">
            <BiRightArrow className="svg-login" />
            Back to home
          </p>{" "}
        </Link>
        <div className="singin_wrap">
          <div className="title_singin">
            <h2>Sign In</h2>
            <p>Enter your email and password to sign in!</p>
          </div>
          <div className="switch_var-singin">
            <div
              onClick={handleShowUserLogin}
              className={`switch_item switch_item-left ${
                isUser ? "switch-active" : "switch-non-active"
              }`}
            >
              <p>Client</p>
            </div>
            <div
              onClick={handleShowPartnerLogin}
              className={`switch_item switch_item-right ${
                isPartner ? "switch-active" : "switch-non-active"
              }`}
            >
              <p>Partner</p>
            </div>
          </div>
          {isUser && (
            <LoginTemplate
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              handleLogin={handleLoginUser}
              handleRegistration={handleRegistrationUser}
              registrationPath='/registration-user'
            />
          )}
          {isPartner && (
            <LoginTemplate
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              handleLogin={handleLoginPartner}
              handleRegistration={handleRegistrationPartner}
              registrationPath=''
            />
          )}
        </div>
        <p>
          © 2023 Horizon UI. All Rights Reserved. Made with love by Simmmple!
        </p>
      </div>
      <div className="right_block">
        <img src="./image/login-user.svg" alt="" />
      </div>
    </div>
  );
};

export default LoginForm;