import React, { useEffect, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import "../../style/loginForm.scss";
import { Link } from "react-router-dom";
import LoginTemplate from './LoginTemplate';
import ErrorComponent from "../Error/ErrorComponent";
import { useNavigate } from "react-router-dom";
import {login} from '../../store/authUser.js'
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const LoginForm = () => {
  const [isUser, setIsUser] = useState(true);
  const [isPartner, setIsPartner] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const isAuthUser = useSelector((state) => state.authUser.isAuthUser);

  console.log('isAuthUser',isAuthUser);

  const handleShowUserLogin = () => {
    setIsUser(true);
    setIsPartner(false);
  }
  const handleShowPartnerLogin = () => {
    setIsPartner(true);
    setIsUser(false);
  }

  const handleLoginUser = async (email, password) => {
    try {
      const data = await dispatch(login({email, password}))
      if('user' in data.payload) {
        window.localStorage.setItem('bus-u-t', data.payload.accessToken);
        navigate('/user-profile');
        window.location.reload();
      } else {
        return alert(data.payload.message)
      }
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
            {t(`Back to home`)}
          </p>{" "}
        </Link>
        <div className="singin_wrap">
          <div className="title_singin">
            <h2></h2>
            <p>{t(`Enter your email and password to sign in`)}!</p>
          </div>
          <div className="switch_var-singin">
            <div
              onClick={handleShowUserLogin}
              className={`switch_item switch_item-left ${
                isUser ? "switch-active" : "switch-non-active"
              }`}
            >
              <p>{t('Client')}</p>
            </div>
            <div
              onClick={handleShowPartnerLogin}
              className={`switch_item switch_item-right ${
                isPartner ? "switch-active" : "switch-non-active"
              }`}
            >
              <p>{t('Partner')}</p>
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
          © 2023 {t('Horizon UI. All Rights Reserved. Made with love by Simple')}!
        </p>
      </div>
      <div className="right_block">
        <img src="./image/login-user.svg" alt="" />
      </div>
    </div>
  );
};

export default LoginForm;
