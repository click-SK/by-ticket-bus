import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { registration } from "../../store/authUser";
const RegistrationUserForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const dispatch = useDispatch();

    const handleRegistrationUser = () => {
        dispatch(registration({email, password, firstName, lastName}))
    }
  return (
    <div>
      <h1>Registration user</h1>
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
      <div className="input_wraper">
          <button className="button_singin" onClick={handleRegistrationUser}>Registration</button>{" "}
      </div>
    </div>
  );
};

export default RegistrationUserForm;
