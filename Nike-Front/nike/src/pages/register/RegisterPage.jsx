import React from "react";
import Second_section from "../../componements/login/second_section/Second_section";
import First_section from "../../componements/login/first_section/First_section";
import First_Section_Register from "../../componements/register/First_Section_Register";
import nikeShoes from "../../assets/img/login-nike2.png";

function RegisterPage() {
  const blur = "L36*aZt700M{~qofD%WB?aofWBWB";

  return (
    <div className="login-container">
      <First_Section_Register></First_Section_Register>
      <Second_section img={nikeShoes} blur={blur}></Second_section>
    </div>
  );
}

export default RegisterPage;
