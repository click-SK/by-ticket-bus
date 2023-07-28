import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { registration } from "../../store/authUser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const RegistrationUserForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");

    const dispatch = useDispatch();
    const isAuthUser = useSelector((state) => state.authUser.isAuthUser);
    const navigate = useNavigate();

    // useEffect(() => {
    //   if(isAuthUser) {
    //     navigate('/user-profile')
    //   }
    // },[isAuthUser])

    const handleRegistrationUser = async () => {
        const data = await dispatch(registration({email, password, firstName, lastName, phone, birthday}));
        if('user' in data.payload) {
          window.localStorage.setItem('bus-u-t', data.payload.accessToken);
          navigate('/user-profile');
          window.location.reload();
        }
    }

  return (
    <div className="registration_wraper">
      <h2>Registration user</h2>
      <div className="wrap_content_regist">
      <div className="right_regist_block"> 
          <div className="input_wraper-item">
            <label htmlFor="first">
              First Name<span>*</span>
            </label>
            <input id="first" type="text" 
            placeholder="First Name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="input_wraper-item">
            <label htmlFor="last">
              Last Name<span>*</span>
            </label>
            <input id="last" type="text" 
            placeholder="Last Name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="input_wraper-item">
            <label htmlFor="phone">
              Phone <span>*</span>
            </label>
            <input id="phone" type="phone" 
            placeholder="0034-27635342424" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="input_wraper-item">
            <label htmlFor="mail">
              Email <span>*</span>
            </label>
            <input id="mail" type="text" 
            placeholder="mail@simmmple.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input_wraper-item">
            <label htmlFor="password">
              Password<span>*</span>
            </label>
            <input id="password" type="password" 
            placeholder="Min. 8 characters" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="input_wraper-item">
            <label htmlFor="birthday">
              Birthday
            </label>
            <input id="birthday" type="text" 
            placeholder="21/11/1992" 
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}/>
          </div>

          <div className="input_wraper">
              <button className="button_singin" onClick={handleRegistrationUser}>Registration</button>{" "}
          </div>
      </div>
      {/* <div className="left_regist_block"> 
      <div className=" input_wraper-item input_wraper-item-photo">
            <label htmlFor="photo">
              Add photo<span>*</span>
            </label>
            <input id="photo" type="file" />
          </div>
      </div> */}
      </div>
      
      
    </div>
  );
};

export default RegistrationUserForm;
