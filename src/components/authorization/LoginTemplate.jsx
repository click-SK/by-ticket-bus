import React, {useState} from "react";
import { Link } from "react-router-dom";
const LoginTemplate = ({setIsChecked, isChecked, handleLogin, handleRegistration, registrationPath }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="input_wraper">
        <div className="input_wraper-item">
          <label htmlFor="mail">
            Email <span>*</span>
          </label>
          <input
            id="mail"
            type="text"
            placeholder="mail@simmmple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input_wraper-item">
          <label htmlFor="password">
            Password<span>*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Min. 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input_wraper input-checkbox">
          <div className="input_wraper-item item-checkbox">
            <input
              id="forgot-pass"
              type="checkbox"
              placeholder="Min. 8 characters"
            />
            <label
              onClick={() => setIsChecked(!isChecked)}
              className={`${isChecked ? "checked" : "unchecked"}`}
              id="forgot-pass-lable"
              htmlFor="forgot-pass"
            ></label>
            <p>
              Keep me logged in<span>*</span>
            </p>
          </div>
          <p className="forgot_pasword-link">Forget password?</p>
        </div>
      </div>
      <div className="input_wraper">
          <button className="button_singin" onClick={() => handleLogin(email, password)}>Sign In</button>{" "}
      </div>
      <div className="not_regist">
        <p onClick={() => handleRegistration(email, password)}>
          Not registered yet? <Link to={registrationPath}> <span>Create an Account </span> </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginTemplate;
