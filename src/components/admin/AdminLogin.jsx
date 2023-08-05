import React, { useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import '../../style/admin.scss'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authAdministration';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
const AdminLogin = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const isAdmin = useSelector((state) => state.authAdmin.isAdmin);
    const isOperator = useSelector((state) => state.authAdmin.isOperator);

    useEffect(() => {
        try {
            if(isAdmin || isOperator) {
                navigate('/admin-panel')
              }
        } catch(e) {
            console.log(e);
        }
      },[isAdmin, isOperator])

    const handleLoginAdministration = async () => {
        const data = await dispatch(login({login: email, password}));
        if('user' in data.payload) {
            window.localStorage.setItem('bus-a-t', data.payload.accessToken);
            navigate('/admin-panel');
            window.location.reload();
          } else {
            return alert(data.payload.message)
          }
        console.log('data admin loging',data);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLoginAdministration();
        }
      };
    return (
        <div className='login_wrap-admin'>
            <div className='left_block-admin'>
                <div className='singin_wrap-admin'>
                    <div className='title_singin-admin'>
                        <h2>{t('Sign in')}</h2>
                        <p>{t('Enter your email and password to sign in')}!</p>
                    </div>
                    <div className='input_wraper-admin'>
                        <div className='input_wraper-item-admin'>
                            <label htmlFor="mail">{t('Email')}<span>*</span></label>
                            <input id='mail' type="text" placeholder='mail@simmmple.com' value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={handleKeyDown}/>
                        </div>
                        <div className='input_wraper-item-admin'>
                            <label htmlFor="password">{t('Password')}<span>*</span></label>
                            <input id='password' type="password" placeholder='Min. 8 characters' value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown}/>
                        </div>
                    </div>
                    <div className='input_wraper input-checkbox-admin'>
                        <div className='input_wraper-item-admin item-checkbox-admin'>
                            <input id='forgot-pass' type="checkbox" placeholder='Min. 8 characters'/>
                            <label 
                            onClick={() => setIsChecked(!isChecked)} 
                            className={`${isChecked ? 'checked-admin' : 'unchecked-admin'}`} id='forgot-pass-lable' htmlFor="forgot-pass"></label>
                            <p>{t('Keep me logged in')}<span>*</span></p>
                        </div>
                        <p className='forgot_pasword-link-admin' >{t('Forgot password')}?</p>
                    </div>
                    <div className='input_wraper-admin'>
                       <button 
                       onClick={handleLoginAdministration}
                       className='button_singin-admin'>{t('Sign in')}</button>
                    </div>
                </div>
                <p>© 2023 {t('Horizon UI. All Rights Reserved. Made with love by Simple')}!</p>
            </div>
            <div className='right_block-admin'>
                <img src="./image/login-admin.svg" alt="" />
            </div>
            
        </div>
    );
};

export default AdminLogin;