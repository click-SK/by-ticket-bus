import React, { useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import '../../style/loginForm.scss'
import { Link } from 'react-router-dom';

const LogInComp = () => {

    const [isClient, setIsClient] = useState(true)
    const [isChecked, setIsChecked] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    localStorage.setItem('isClient',isClient)
    useEffect (() => {
        localStorage.setItem('isClient',isClient)
    }, [isClient] )


    const hendlerChangeInputEmail = (e) =>{
        setEmail(e)
    }
    const hendlerChangeInputPass = (e) =>{
        setPassword(e)
    }
    


    return (
        <div className='login_wrap'>
            <div className='left_block'>
                <Link style={{textAlign:'left', width: '100%' }} to='/'><p className='back_home_login'><BiRightArrow className='svg-login'/>Back to home</p> </Link>
                <div className='singin_wrap'>
                    <div className='title_singin'>
                        <h2>Sign In</h2>
                        <p>Enter your email and password to sign in!</p>
                    </div>
                    <div className='switch_var-singin'>
                        <div 
                        onClick={() => setIsClient(!isClient)}
                        className={`switch_item switch_item-left ${isClient ? 'switch-active' : 'switch-non-active' }`}>
                            <p>Client</p>
                        </div>
                        <div 
                        onClick={() => setIsClient(!isClient)}
                        className={`switch_item switch_item-right ${isClient ? 'switch-non-active' : 'switch-active' }`}>
                            <p>Partner</p>
                        </div>
                    </div>
                    <div className='input_wraper'>
                        <div className='input_wraper-item'>
                            <label htmlFor="mail">Email <span>*</span></label>
                            <input id='mail' type="text" placeholder='mail@simmmple.com' value={email} onChange={(e) => hendlerChangeInputEmail(e.target.value)}/>
                        </div>
                        <div className='input_wraper-item'>
                            <label htmlFor="password">Password<span>*</span></label>
                            <input id='password' type="password" placeholder='Min. 8 characters' value={password} onChange={(e) => hendlerChangeInputPass(e.target.value)}/>
                        </div>
                    </div>
                    <div className='input_wraper input-checkbox'>
                        <div className='input_wraper-item item-checkbox'>
                            <input id='forgot-pass' type="checkbox" placeholder='Min. 8 characters'/>
                            <label 
                            onClick={() => setIsChecked(!isChecked)} 
                            className={`${isChecked ? 'checked' : 'unchecked'}`} id='forgot-pass-lable' htmlFor="forgot-pass"></label>
                            <p>Keep me logged in<span>*</span></p>
                        </div>
                        <p className='forgot_pasword-link' >Forget password?</p>
                    </div>
                    <div className='input_wraper'>
                       <Link to='/profile'> <button className='button_singin'>Sign In</button> </Link> 
                    </div>
                    <div className='not_regist'>
                        <p>Not registered yet? <span>Create an Account</span> </p>
                    </div>
                </div>
                <p>© 2023 Horizon UI. All Rights Reserved. Made with love by Simmmple!</p>
            </div>
            <div className='right_block'>
                <img src="./image/login-user.svg" alt="" />
            </div>
            
        </div>
    );
};

export default LogInComp;