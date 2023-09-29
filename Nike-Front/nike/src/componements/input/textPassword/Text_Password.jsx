import React, { useState } from "react";
import Eye_Open from "../../../assets/icon/eyeOpen/Eye_Open";
import Eye_Closed from "../../../assets/icon/eyeClosed/Eye_Closed";
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';

const eyeOpen = <Eye_Open></Eye_Open>;
const eyeClose = <Eye_Closed></Eye_Closed>;

function Text_Password(props) {  
  const { name, value, handleChange, errorLogin: err, error , text } = props;
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((val) => !val);
  };

  const onChange = (event) => {
    handleChange(event);
  };

  return (
    <div className="login-input password">
      <label>
        {text}<span>*</span>
      </label>
      <div className="input-wrapper">
        <input
          onChange={onChange}
          value={value}
          name={name}
          type={show ? "text" : "password"}
          placeholder="Min. 8 characters"
          style={{ border: error || err ? "1px solid #FF0000" : "1px solid #ccc" }}
        />
        <div className="eye" onClick={handleShow}>
          {" "}
          {!show ? eyeOpen : eyeClose}{" "}
        </div>
      </div>
      {(error) && (
        <div className="err-msg" style={{ color: "#FF0000", marginTop: 5 }}> <div  className="warning-icon" ><WarningOutlinedIcon style={{color : "red" , fontSize : "17px"  , fontWeight : "400 "}}  ></WarningOutlinedIcon> </div>  <p> {error}</p></div>
      )}
    </div>
  );
}

export default Text_Password;
