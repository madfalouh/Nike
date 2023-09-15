import React, { useEffect, useRef, useState } from "react";
import "./ForgotPassword.css";
import Text_Input from "../../componements/input/textInput/Text_Input";
import Button from "../../componements/button/Button";
import { Text } from "@chakra-ui/react";
import nikeLogo from "../../assets/img/nikeBlack.png";
import axios from "axios";

function ForgotPassword() {
  const [forgot, setForgot] = useState(false);
  const containerRef = useRef(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState(null);

  const validateEmail = (value) => {
    if (value.length === 0) return null;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailPattern.test(value) ? "Invalid email" : null;
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setEmail(value);

      setEmailError(validateEmail(value));

  };

  const handleClick = async () => {

  const emailErrorCheck = email.length === 0 ? "Email Cannot Be Empty" : null;

  if (emailErrorCheck  ) {
    setEmailError(emailErrorCheck);
 
    return;
  }
  if (emailError  ) {
    return;
  }


console.log("hvbhdvchdchdc");

    await axios({
      method: "post",
      url: "http://localhost:8080/api/v1/reset-password/forgot_password",
      data: { email: email },
      headers: { "content-type": "application/json" },
    })
      .then(() => {
        setForgot(true);
      })
      .catch((err) => {
          setError(err.response.data.message);

      });
  };

  return (
    <>
      <div className="forgot-passsord-container">
        <div className="forgot-password-img">
          <img src={nikeLogo} width={100}></img>
        </div>

        <div
          ref={containerRef}
          className={
            forgot
              ? "forgot-password-inner-container reduced"
              : "forgot-password-inner-container"
          }
        >
          {forgot ? (
            <div>
              {" "}
              <div className="text-forgot-password-title  login-section-sign-in  send-message">
                <h2>
                  Thanks! If {email} matches an email we have on
                  file, then we've sent you an email containing further
                  instructions for resetting your password.
                </h2>

                <p>
                  If you haven't received an email in 5 minutes, check your
                  spam,
                  <span
                    style={{
                      fontWeight: "500",
                      color: "#0062ff",
                      cursor: "pointer",
                    }}
                  >
                    resend
                  </span>
                  , or try a{" "}
                  <span
                    style={{
                      fontWeight: "500",
                      color: "#0062ff",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setForgot(false);
                    }}
                  >
                    different email
                  </span>
                  .
                </p>
              </div>{" "}
            </div>
          ) : (
            <>
              <div className="text-forgot-password">
                <div className="text-forgot-password-title  login-section-sign-in">
                  <h2>Reset your password</h2>
                </div>
                <div className="text-forgot-password-title login-section-sign-in">
                  <p>
                    Enter the email address associated with your account and
                    we'll send you a link to reset your password.
                  </p>{" "}
                </div>
              </div>
              <div className="">
                <div className="forgot-password-email">
                  <Text_Input
                    name="email"
                    text="Email"
                    placeholder="name@exemple.com"
                    handleChange={handleChange}
                    errorLogin={error}
                    error={emailError}
                  ></Text_Input>
                </div>
                <div className="loin-submit">
                  <Button
                    color="black"
                    onClick={handleClick}
                    text="Send"
                    textColor="white"
                  />
                </div>
              </div>
            </>
          )}

          <div className="login-forgot-password  return-sign-in">
            <span>
              <Text w="124px" fontWeight="500">
                Return To Sign In?
              </Text>
            </span>
          </div>
          <div className="forgot-password-additional">
            <p>
              Dont Have an account <span> Sign Up </span>
            </p>
            <p style={{ fontWeight: "400", fontSize: "0.8rem" }}>
              It happens to the best of us. Resetting your password is easy.
              Just enter your registered email address below, and we'll send you
              a link to create a new one. Remember to choose a strong password
              that you haven't used before. If you ever need help, our support
              team is here to assist.
            </p>
            <div className="nike-footer">
              <p>© Nike</p>
              <p>Contact Us</p>
              <p>Privacy and Terms</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="login-root">
          <div
            className="box-root flex-flex flex-direction--column"
            style={{ flexGrow: 1 }}
          >
            <div className="loginbackground box-background--white padding-top--64">
              <div className="loginbackground-gridContainer">
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "top / start / 8 / end" }}
                >
                  <div
                    className="box-root"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                      flexGrow: 1,
                    }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "4 / 2 / auto / 5" }}
                >
                  <div
                    className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                    style={{ flexGrow: 1 }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "7 / start / auto / 4" }}
                >
                  <div
                    className="box-root box-background--blue animationLeftRight"
                    style={{ flexGrow: 1 }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "8 / 4 / auto / 6" }}
                >
                  <div
                    className="box-root box-background--gray100 animationLeftRight tans3s"
                    style={{ flexGrow: 1 }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "2 / 15 / auto / end" }}
                >
                  <div
                    className="box-root box-background--cyan200 animationRightLeft tans4s"
                    style={{ flexGrow: 1 }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "3 / 14 / auto / end" }}
                >
                  <div
                    className="box-root box-background--blue animationRightLeft"
                    style={{ flexGrow: 1 }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "4 / 17 / auto / 20" }}
                >
                  <div
                    className="box-root box-background--gray100 animationRightLeft tans4s"
                    style={{ flexGrow: 1 }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "5 / 14 / auto / 17" }}
                >
                  <div
                    className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                    style={{ flexGrow: 1 }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
