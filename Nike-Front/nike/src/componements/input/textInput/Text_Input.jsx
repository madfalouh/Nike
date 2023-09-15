import React, { useEffect, useState } from "react";
import "./Text_Input.css";
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';

function Text_Input(props) {
  const {
    text,
    placeholder,
    value,
    name,
    handleChange,
    error,
    errorLogin: err,
  } = props;



 const onChange = (event) => {
    handleChange(event);
  };

  return (
    <div className="login-input text">
      <label>
        {text}
        <span>*</span>
      </label>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={{ border: error || err ? "1px solid #FF0000" : "1px solid #ccc" }}
      />
      {error &&         <div className="err-msg" style={{ color: "#FF0000", marginTop: 5 }}> <div  className="warning-icon" ><WarningOutlinedIcon style={{color : "red" , fontSize : "17px"  , fontWeight : "400 "}}  ></WarningOutlinedIcon> </div>  <p> {error}</p></div>
}
    </div>
  );
}

export default Text_Input;
