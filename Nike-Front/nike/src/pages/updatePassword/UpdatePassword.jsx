import React, { useEffect, useRef, useState } from "react";
import Text_Input from "../../componements/input/textInput/Text_Input";
import Button from "../../componements/button/Button";
import { Text } from "@chakra-ui/react";
import nikeLogo from "../../assets/img/nikeBlack.png";
import Text_Password from "../../componements/input/textPassword/Text_Password";
import axios from "axios";
import { useLocation } from "react-router";

function UpdatePassword() {
  const containerRef = useRef(null);
  const [passwordError, setPasswordError] = useState("");
  const [passwordErrorMain, setPasswordErrorMain] = useState("");
    const [error, setError] = useState(null);

  const [formInput, setFormInput] = useState({
    password: "",
    repassword: "",
  });

  const { repassword, password } = formInput;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormInput({ ...formInput, [name]: value });
  };

  useEffect(() => {
    setPasswordError(validatePassword);

    setPasswordErrorMain(null);
  }, [password, repassword]);

  const validatePassword = () => {
    console.log(password);

    console.log(repassword);

    return password === repassword ? null : "Password must be identical";
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const handleClick = async () => {
    const passwordErrorCheck =
      password.length === 0 ? "Password Cannot Be Empty" : null;
    const repasswordErrorCheck =
      repassword.length === 0 ? "Password Cannot Be Empty" : null;

    if (
      validatePassword() === null &&
      (repasswordErrorCheck || passwordErrorCheck)
    ) {
      setPasswordErrorMain(passwordErrorCheck);
      setPasswordError(repasswordErrorCheck);
      return;
    }

    if (validatePassword != null) {
      return;
    }

    await axios({
      method: "post",
      url:
        "http://localhost:8080/api/v1/reset-password/update_password?token=" +
        token,
      data: { password: password },
      headers: { "content-type": "application/json" },
    })
      .then(() => {
        console.log("goooooooooooooodsssss");
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

        <div ref={containerRef} className={"forgot-password-inner-container"}>
          <div className="text-forgot-password">
            <div className="text-forgot-password-title  login-section-sign-in">
              <h2>Reset your password</h2>
            </div>
            <div className="text-forgot-password-title login-section-sign-in">
              <p>Enter your new Password.</p>{" "}
            </div>
          </div>
          <div className="">
            <div className="forgot-password-email">
              <Text_Password
                name="password"
                text="Password"
                handleChange={handleChange}
                error={passwordErrorMain}
                errorLogin={error}

              ></Text_Password>
              <br></br>
              <Text_Password
                name="repassword"
                text="Re type password"
                handleChange={handleChange}
                error={passwordError}
              ></Text_Password>
            </div>
            <div className="loin-submit">
              <Button
                color="black"
                text="Send"
                textColor="white"
                onClick={handleClick}
              />
            </div>
          </div>

          <div className="forgot-password-additional">
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

export default UpdatePassword;
