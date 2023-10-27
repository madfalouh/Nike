import React from "react";
 
import FeauturedProducts from "../../component/featuredProducts/FeauturedProducts";
import Features from "../../component/features/Features";
import LastBanner from "../../component/lastBanner/LastBanner";
import NewArrivals from "../../component/NewArrivals/NewArrivals";
import Sm_banner from "../../component/sm-banner/Sm_banner";
import WelcomSection from "../../component/welcome-section/WelcomSection";
import NavBar from "../../component/navbar/NavBar";
function WelcomePage() {

//component

  return (
    <>
    <NavBar></NavBar>
      <WelcomSection></WelcomSection>
      <Features></Features>
      <FeauturedProducts></FeauturedProducts>
       <NewArrivals></NewArrivals>
      <Sm_banner></Sm_banner>
      <LastBanner></LastBanner>
    </>
  );
}

export default WelcomePage;
