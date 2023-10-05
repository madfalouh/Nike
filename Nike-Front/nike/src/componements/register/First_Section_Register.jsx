import Google_icon from "../../assets/icon/google_icon/Google_icon";
import Text_Input from "../../componements/input/textInput/Text_Input";
import Text_Password from "../../componements/input/textPassword/Text_Password";
import { Checkbox, Text } from "@chakra-ui/react";
import axios from "axios";
import Error from "../Error/Error";
import { useNavigate } from "react-router";
import api from "../../api";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import disposableEmailDomains from "disposable-email-domains";

function First_Section_Register() {
  const [isRememberMe, setisRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const naviagte = useNavigate();

  const validateEmail = (value) => {
    if (value.length === 0) return null;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailPattern.test(value) ? "Invalid email" : null;
  };

  const validatePassword = (value) => {
    if (value.length === 0) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasDigits = /\d/.test(value);

    if (value.length < 8) return "Password should be at least 8 characters.";
    if (!hasUpperCase)
      return "Password should have at least one uppercase letter.";
    if (!hasLowerCase)
      return "Password should have at least one lowercase letter.";
    if (!hasDigits) return "Password should have at least one digit.";

    return null;
  };

  const validateNames = (value) => {
    return value.length < 1 ? "Name should not be empty" : null;
  };

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    isRememberMe: isRememberMe,
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormInput({ ...formInput, [name]: value });

    if (name === "email") {
      setEmailError(validateEmail(value));
    } else if (name === "password") {
      setPasswordError(validatePassword(value));
    } else if (name === "firstName") {
      setFirstNameError(validateNames(value));
    } else if (name === "lastName") {
      setLastNameError(validateNames(value));
    }

    setError(null);
  };

  const { email, password, firstName, lastName } = formInput;

  const handleClick = async () => {
    const domain = email.split("@")[1];

    if (disposableEmailDomains.includes(domain)) {
      setError(
        "Please use a valid email domain. Disposable emails are not allowed."
      );
      return;
    }

    const emailErrorCheck = email.length === 0 ? "Email Cannot Be Empty" : null;
    const passwordErrorCheck =
      password.length === 0 ? "Password Cannot Be Empty" : null;
    const firstNameCheck = validateNames(lastName);
    const lastNameCheck = validateNames(firstName);

    if (firstNameCheck || lastNameCheck) {
      setFirstNameError(firstNameCheck);
      setLastNameError(lastNameCheck);
      return;
    }

    if (emailErrorCheck || passwordErrorCheck) {
      setEmailError(emailErrorCheck);
      setPasswordError(passwordErrorCheck);
      return;
    }
    if (emailError || passwordError) {
      return;
    }
    try {
      const res = await api.post("/api/v1/auth/register", {
        email,
        password,
        firstName,
        secondName: lastName,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      naviagte("/login");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "238602174686-hupc7111dk4ve7hoft6im4c1ffmcfdar.apps.googleusercontent.com",
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

  const responseGoogle = async (response) => {
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

  return (
    <div className="login-first-section-container">
      <div className="login-first-section-body">
        <div className="login-section-sign-in">
          <h2>Sign Up</h2>
          <p>Enter your email and password to sign up!</p>
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
          <div className="input-email-login-wrapper">
            <Text_Input
              handleChange={handleChange}
              name="firstName"
              value={firstName}
              text="First Name"
              placeholder="Jhon"
              errorLogin={error}
              error={firstNameError}
            ></Text_Input>
          </div>
          <div className="input-email-login-wrapper">
            <Text_Input
              handleChange={handleChange}
              name="lastName"
              value={lastName}
              text="Last Name"
              placeholder="Doe"
              errorLogin={error}
              error={lastNameError}
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
        <br></br>
        <div className="loin-submit">
          <Button
            color="black"
            text="Sign up"
            textColor="white"
            onClick={handleClick}
          />
        </div>

        <div className="login-not-registred">
          <p>
            Have An account ?<span>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default First_Section_Register;
