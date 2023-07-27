import React, { useState } from "react";
import "./First_section.css";
import Google_icon from "../../assets/icon/google_icon/Google_icon";
import Button from "../button/Button";
import Eye_Closed from "../../assets/icon/eyeClosed/Eye_Closed";
import Eye_Open from "../../assets/icon/eyeOpen/Eye_Open";
import Text_Input from "../input/textInput/Text_Input";
import Text_Password from "../input/textPassword/Text_Password";

function First_section() {
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
          <div className="login-line"></div> or
          <div className="login-line"></div>
        </div>
        <div className="login-input-body">
          <div className="input-email-login-wrapper">
            <Text_Input
              text="Email"
              placeholder="name@exemple.com"
            ></Text_Input>
          </div>
          <div className="input-password-login-wrapper">
            <Text_Password />
          </div>
        </div>
        <div className="login-options">
          <div className="login-remember-me">remember me</div>
          <div className="login-forgot-password">reeset password</div>
        </div>
        <div className="loin-submit">
          <Button color="black" text="Sign in" textColor="white" />
        </div>

        <div className="login-not-registred">
          <p> not Registered </p>
        </div>
      </div>
    </div>
  );
}

export default First_section;
