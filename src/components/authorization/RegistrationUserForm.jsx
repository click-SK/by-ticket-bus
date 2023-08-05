import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { registration } from "../../store/authUser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as validator from '../../validation/validator-form';
const RegistrationUserForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const { t } = useTranslation();

    const dispatch = useDispatch();
    const isAuthUser = useSelector((state) => state.authUser.isAuthUser);
    const navigate = useNavigate();

    const handleRegistrationUser = async () => {
      try {
        const resoult = validator.validationRegistration(email, password);
        if(resoult.isValid) {
          const data = await dispatch(registration({email, password, firstName, lastName, phone, birthday}));
          console.log('registration data',data);
          if('user' in data.payload) {
            window.localStorage.setItem('bus-u-t', data.payload.accessToken);
            navigate('/user-profile');
            window.location.reload();
          } else{
            alert(data.payload.message)
          }
        } else {
          resoult.reason == 'email' ? setEmailErrorMessage(resoult.error) : setEmailErrorMessage('');
          resoult.reason == 'password' ? setPasswordErrorMessage(resoult.error) : setPasswordErrorMessage('');
        }
      } catch(e) {
        console.log(e);
      }
    }

  return (
    <div className="registration_wraper">
      <h2>{t('Registration user')}</h2>
      <div className="wrap_content_regist">
      <div className="right_regist_block"> 
          <div className="input_wraper-item">
            <label htmlFor="first">
            {t('First Name')}<span>*</span>
            </label>
            <input id="first" type="text" 
            placeholder="First Name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="input_wraper-item">
            <label htmlFor="last">
            {t('Last Name')}<span>*</span>
            </label>
            <input id="last" type="text" 
            placeholder="Last Name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="input_wraper-item">
            <label htmlFor="phone">
            {t('Phone')} <span>*</span>
            </label>
            <input id="phone" type="phone" 
            placeholder="0034-27635342424" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="input_wraper-item">
            <label htmlFor="mail">
            {t('Email')} <span>*</span>
            </label>
            <input id="mail" type="text" 
            placeholder="mail@simmmple.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          {emailErrorMessage && <p className="error-message">{emailErrorMessage}</p>}
          <div className="input_wraper-item">
            <label htmlFor="password">
            {t('Password')}<span>*</span>
            </label>
            <input id="password" type="password" 
            placeholder="Min. 8 characters" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          {passwordErrorMessage && <p className="error-message">{passwordErrorMessage}</p>}
          <div className="input_wraper-item">
            <label htmlFor="birthday">
            {t('Birthday')}
            </label>
            <input id="birthday" type="text" 
            placeholder="21/11/1992" 
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}/>
          </div>

          <div className="input_wraper">
              <button className="button_singin" onClick={handleRegistrationUser}>{t('Registration')}</button>{" "}
          </div>
      </div>
      </div>
    </div>
  );
};

export default RegistrationUserForm;
