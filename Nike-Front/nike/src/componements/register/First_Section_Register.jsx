import Google_icon from "../../assets/icon/google_icon/Google_icon";
import Text_Input from "../../componements/input/textInput/Text_Input";
import Text_Password from "../../componements/input/textPassword/Text_Password";
import { Checkbox, Text } from "@chakra-ui/react";
import axios from "axios";
import Error from "../Error/Error";
import { useNavigate } from "react-router";
import api from "../../api";
import { useState } from "react";
import Button from "../button/Button";
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
    return value.length < 4 && value.length > 0 ? "Min. 4 characters" : null;
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
     secondName:lastName,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      naviagte("/login")
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
