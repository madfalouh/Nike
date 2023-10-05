import React, { useEffect, useRef, useState } from "react";
import "./First_section.css";
import Google_icon from "../../../assets/icon/google_icon/Google_icon";
import Button from "../../button/Button";
import Text_Input from "../../input/textInput/Text_Input";
import Text_Password from "../../input/textPassword/Text_Password";
import { Checkbox, Text } from "@chakra-ui/react";
import axios from "axios";
import { useGoogleLogin } from '@react-oauth/google';
import Error from "../../Error/Error";
import api from "../../../api";
import { useNavigate } from "react-router";
import disposableEmailDomains from "disposable-email-domains";

function First_section() {

  const [isRememberMe, setisRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const naviagte = useNavigate();

  const validateEmail = (value) => {
    if (value.length === 0) return null;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailPattern.test(value) ? "Invalid email" : null;
  };

  const validatePassword = (value) => {
    return value.length < 8 && value.length > 0 ? "Min. 8 characters" : null;
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
    const domain = email.split("@")[1];
    console.log(disposableEmailDomains);
    if (disposableEmailDomains.includes(domain)) {
      setError(
        "Please use a valid email domain. Disposable emails are not allowed."
      );
      return;
    }

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
      const res = await api.post("/api/v1/auth/authenticate", {
        email,
        password,
        rememberMe: isRememberMe,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };



  const responseGoogle = async (response) => {
    console.log(response);

    try {
      if (response) {
        const res = await api.post("/api/v1/auth/google-authenticate", {
          googleToken: response.credential,
        });
        console.log(res);

        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
      } else {
        setError("Failed to authenticate with Google.");
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

 

  useEffect(() => {
 
    window.google.accounts.id.initialize({
      client_id: "238602174686-hupc7111dk4ve7hoft6im4c1ffmcfdar.apps.googleusercontent.com",
      ux_mode: "popup",
      callback: responseGoogle,
    });

    const createFakeGoogleWrapper = () => {
      const googleLoginWrapper = document.createElement("div");
      googleLoginWrapper.style.display = "none";
      googleLoginWrapper.classList.add("custom-google-button");
      document.body.appendChild(googleLoginWrapper);
      
      window.google.accounts.id.renderButton(googleLoginWrapper, {
        type: "icon",
        width: "200",
      });

      const googleLoginWrapperButton =
        googleLoginWrapper.querySelector("div[role=button]");

      return {
        click: () => {
          googleLoginWrapperButton.click();
        },
      };
    };

    const googleButtonWrapper = createFakeGoogleWrapper();

    window.handleGoogleLogin = () => {
      googleButtonWrapper.click();
    };
  }, []);
 
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
   onClick={window.handleGoogleLogin} 
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
              errorLogin={error}
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
              <Text
                w="124px"
                onClick={() => {
                  naviagte("/forgot-password");
                }}
                fontWeight="500"
              >
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
            Not Registered yet
            <span
              onClick={() => {
                naviagte("/register");
              }}
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default First_section;
