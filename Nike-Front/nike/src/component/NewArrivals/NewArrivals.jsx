import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewArivals.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NewArrivals = () => {
  let slides = [
    <img
      key="image1"
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      className="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/495e355e-017e-44dc-a9ee-6cd11899763f/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/495e355e-017e-44dc-a9ee-6cd11899763f/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/495e355e-017e-44dc-a9ee-6cd11899763f/nike-just-do-it.jpg"
    />,
    <img
      key="image2"
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      className="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8d5cabf7-8185-471f-84d2-a89403b6d3eb/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8d5cabf7-8185-471f-84d2-a89403b6d3eb/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/8d5cabf7-8185-471f-84d2-a89403b6d3eb/nike-just-do-it.jpg"
    />,
    <img
      key="image3"
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      className="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/465c9f08-2432-4b35-bcd8-5a8cbc29df34/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/465c9f08-2432-4b35-bcd8-5a8cbc29df34/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/465c9f08-2432-4b35-bcd8-5a8cbc29df34/nike-just-do-it.jpg"
    />,
    <img
      key="image4"
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      className="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/15cdc7b5-6de0-4d5c-81e9-6d01fc944b18/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/15cdc7b5-6de0-4d5c-81e9-6d01fc944b18/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/15cdc7b5-6de0-4d5c-81e9-6d01fc944b18/nike-just-do-it.jpg"
    ></img>,
    <img
      key="image5"
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      className="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/f0a04bde-ca73-405e-a895-eba7fc7cf2f2/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/f0a04bde-ca73-405e-a895-eba7fc7cf2f2/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/f0a04bde-ca73-405e-a895-eba7fc7cf2f2/nike-just-do-it.jpg"
    ></img>,

    <img
      key="image6"
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      className="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/83c538c5-239b-49cf-8a44-b0924596e794/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/83c538c5-239b-49cf-8a44-b0924596e794/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/83c538c5-239b-49cf-8a44-b0924596e794/nike-just-do-it.jpg"
    ></img>,
  ];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1050, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 650, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

 
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container">
      <h2>Always Iconic</h2>

      <div className="carousel">
        <div className="nav nav-left">
          <div className="ion-chevron-left carousel-arrow-icon-left">
            <ArrowBackIosIcon  onClick={previous}
              style={{ color: "#000", fontSize: "15px", fontWeight: "800" }}
            ></ArrowBackIosIcon>
          </div>
        </div>

        <div className="carousel-content">
          <Slider ref={sliderRef}  {...settings}>
            {slides.map((slide, index) => (
              <div className="slider-elmt" key={index}>
                {slide}
              </div>
            ))}
          </Slider>
        </div>

        <div className="nav nav-right">
          <div className="ion-chevron-right carousel-arrow-icon-right"  onClick={next} >
            <ArrowForwardIosIcon
              style={{ color: "#000", fontSize: "15px", fontWeight: "800" }}
            ></ArrowForwardIosIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
