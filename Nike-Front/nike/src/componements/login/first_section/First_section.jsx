import React, { useEffect, useState } from "react";
import "./First_section.css";
import Google_icon from "../../../assets/icon/google_icon/Google_icon";
import Button from "../../button/Button";
import Text_Input from "../../input/textInput/Text_Input";
import Text_Password from "../../input/textPassword/Text_Password";
import { Checkbox, Text } from "@chakra-ui/react";
import axios from "axios";
import Error from "../../Error/Error";
import api from "../../../api";
import { useNavigate } from "react-router";

function First_section() {


  

  const [isRememberMe, setisRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const naviagte = useNavigate()

  const validateEmail = (value) => {
    if (value.length === 0) return null;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailPattern.test(value) ? "Invalid email" : null;
  };

  const validatePassword = (value) => {
    return value.length < 4 && value.length > 0 ? "Min. 4 characters" : null;
  };

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    isRememberMe: isRememberMe,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormInput({ ...formInput, [name]: value });

    if (name === "email") {
      setEmailError(validateEmail(value));
    } else if (name === "password") {
      setPasswordError(validatePassword(value));
    }

    setError(null);
  };

  const { email, password } = formInput;

const handleClick = async () => {
  const emailErrorCheck = email.length === 0 ? "Email Cannot Be Empty" : null;
  const passwordErrorCheck =
    password.length === 0 ? "Password Cannot Be Empty" : null;

  if (emailErrorCheck || passwordErrorCheck) {
    setEmailError(emailErrorCheck);
    setPasswordError(passwordErrorCheck);
    return;
  }
  if (emailError || passwordError) {
    return;
  }
  try {
    const res = await api.post("/api/v1/auth/authenticate", { email, password, rememberMe: isRememberMe });
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
  } catch (err) {
    console.log(err);
    setError(err.response.data.message);
  }
};
 
        
      //  window.location.href = `${authUri}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

  return (
    <div className="login-first-section-container">
      <div className="login-first-section-body">
        <div className="login-section-sign-in">
          <h2>Sign In</h2>
          <p>Enter your email and password to sign in!</p>
 
          <Button
            color="grey"
            Icon={Google_icon}
            text="Sign in with Google"
            textColor="black"
          />
        </div>

        <div className="login-or-line">
          <div className="login-line"></div>
          <p>or</p>
          <div className="login-line"></div>
        </div>
        {error && <Error message={error}></Error>}

        <div className="login-input-body">
          <div className="input-email-login-wrapper">
            <Text_Input
              handleChange={handleChange}
              name="email"
              value={email}
              text="Email"
              placeholder="name@exemple.com"
              errorLogin={error}
              error={emailError}
            ></Text_Input>
          </div>
          <div className="input-password-login-wrapper">
            <Text_Password
              name="password"
              text="Password"
              value={password}
              handleChange={handleChange}
              error={passwordError}
            />
          </div>
        </div>
        <div className="login-options">
          <div onClick={() => {}}>
            <Checkbox
              name="checkbox"
              isChecked={isRememberMe}
              onChange={() => setisRememberMe((prev) => !prev)}
            >
              Remember me
            </Checkbox>{" "}
          </div>
          <div className="login-forgot-password">
            <span>
              <Text w="124px"  onClick={()=>{naviagte("/forgot-passwordb")}}  fontWeight="500">
                Forgot password?
              </Text>
            </span>
          </div>
        </div>
        <div className="loin-submit">
          <Button
            color="black"
            text="Sign in"
            textColor="white"
            onClick={handleClick}
          />
        </div>

        <div className="login-not-registred">
          <p>
            Not Registered yet<span onClick={()=>{naviagte("/register")}} >Create an account</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default First_section;