import React, { useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import '../../style/admin.scss'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authAdministration';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAdmin = useSelector((state) => state.authAdmin.isAdmin);
    const isOperator = useSelector((state) => state.authAdmin.isOperator);

    useEffect(() => {
        if(isAdmin || isOperator) {
          navigate('/admin-panel')
        }
      },[isAdmin, isOperator])

    const handleLoginAdministration = () => {
        dispatch(login({login: email, password}))
    }
    return (
        <div className='login_wrap-admin'>
            <div className='left_block-admin'>
                <div className='singin_wrap-admin'>
                    <div className='title_singin-admin'>
                        <h2>Sign In</h2>
                        <p>Enter your email and password to sign in!</p>
                    </div>
                    <div className='input_wraper-admin'>
                        <div className='input_wraper-item-admin'>
                            <label htmlFor="mail">Email <span>*</span></label>
                            <input id='mail' type="text" placeholder='mail@simmmple.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='input_wraper-item-admin'>
                            <label htmlFor="password">Password<span>*</span></label>
                            <input id='password' type="password" placeholder='Min. 8 characters' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className='input_wraper input-checkbox-admin'>
                        <div className='input_wraper-item-admin item-checkbox-admin'>
                            <input id='forgot-pass' type="checkbox" placeholder='Min. 8 characters'/>
                            <label 
                            onClick={() => setIsChecked(!isChecked)} 
                            className={`${isChecked ? 'checked-admin' : 'unchecked-admin'}`} id='forgot-pass-lable' htmlFor="forgot-pass"></label>
                            <p>Keep me logged in<span>*</span></p>
                        </div>
                        <p className='forgot_pasword-link-admin' >Forget password?</p>
                    </div>
                    <div className='input_wraper-admin'>
                       <button 
                       onClick={handleLoginAdministration}
                       className='button_singin-admin'>Sign In</button>
                    </div>
                </div>
                <p>© 2023 Horizon UI. All Rights Reserved. Made with love by Simmmple!</p>
            </div>
            <div className='right_block-admin'>
                <img src="./image/login-admin.svg" alt="" />
            </div>
            
        </div>
    );
};

export default AdminLogin;