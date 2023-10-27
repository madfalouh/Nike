import { useEffect } from "react";
import { useRef } from "react";
import "./NewArivals.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const NewArrivals = () => {
  useEffect(() => {
    var carousel = document.querySelector(".carousel");
    var carouselContent = document.querySelector(".carousel-content");
    var slides = document.querySelectorAll(".slide");
    var arrayOfSlides = Array.prototype.slice.call(slides);
    var carouselDisplaying;
    var screenSize;
    setScreenSize();
    var lengthOfSlide;

    function addClone() {
      var lastSlide = carouselContent.lastElementChild.cloneNode(true);
      lastSlide.style.left = -lengthOfSlide + "px";
      carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
    }
    // addClone();

    function removeClone() {
      var firstSlide = carouselContent.firstElementChild;
      firstSlide.parentNode.removeChild(firstSlide);
    }

    function moveSlidesRight() {
      var slides = document.querySelectorAll(".slide");
      var slidesArray = Array.prototype.slice.call(slides);
      var width = 0;

      slidesArray.forEach(function (el, i) {
        el.style.left = width + "px";
        width += lengthOfSlide + 13; // Add a 20px space between elements
      });
      addClone();
    }
    moveSlidesRight();

    function moveSlidesLeft() {
      var slides = document.querySelectorAll(".slide");
      var slidesArray = Array.prototype.slice.call(slides);
      slidesArray = slidesArray.reverse();
      var maxWidth = (slidesArray.length - 1) * (lengthOfSlide + 13); // Add a 20px space between elements

      slidesArray.forEach(function (el, i) {
        maxWidth -= lengthOfSlide + 13; // Add a 20px space between elements
        el.style.left = maxWidth + "px";
      });
    }

    window.addEventListener("resize", setScreenSize);

    function setScreenSize() {
      if (window.innerWidth >= 500) {
        carouselDisplaying = 3;
      } else if (window.innerWidth >= 300) {
        carouselDisplaying = 2;
      } else {
        carouselDisplaying = 1;
      }
      getScreenSize();
    }

    function getScreenSize() {
      var slides = document.querySelectorAll(".slide");
      var slidesArray = Array.prototype.slice.call(slides);
      lengthOfSlide = 500;
      var initialWidth = -lengthOfSlide - 20;
      var spaceBetweenSlides = 13; // Add space between slides here
      slidesArray.forEach(function (el) {
        console.log(el);
        el.style.width = lengthOfSlide - spaceBetweenSlides + "px";
        el.style.left = initialWidth + "px";
        initialWidth += lengthOfSlide + spaceBetweenSlides;
      });
    }

    var rightNav = document.querySelector(".nav-right");
    rightNav.addEventListener("click", moveLeft);

    var moving = true;
    function moveRight() {
      if (moving) {
        moving = false;
        var lastSlide = carouselContent.lastElementChild;
        lastSlide.parentNode.removeChild(lastSlide);
        carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
        removeClone();
        var firstSlide = carouselContent.firstElementChild;
        firstSlide.addEventListener("transitionend", activateAgain);
        moveSlidesRight();
      }
    }

    function activateAgain() {
      var firstSlide = carouselContent.firstElementChild;
      moving = true;
      firstSlide.removeEventListener("transitionend", activateAgain);
    }

    var leftNav = document.querySelector(".nav-left");
    leftNav.addEventListener("click", moveRight);

    // var moveLeftAgain = true;

    function moveLeft() {
      if (moving) {
        moving = false;
        removeClone();
        var firstSlide = carouselContent.firstElementChild;
        firstSlide.addEventListener("transitionend", replaceToEnd);
        moveSlidesLeft();
      }
    }

    function replaceToEnd() {
      var firstSlide = carouselContent.firstElementChild;
      firstSlide.parentNode.removeChild(firstSlide);
      carouselContent.appendChild(firstSlide);
      firstSlide.style.left = (arrayOfSlides.length - 1) * lengthOfSlide + "px";
      addClone();
      moving = true;
      firstSlide.removeEventListener("transitionend", replaceToEnd);
    }

    carouselContent.addEventListener("mousedown", seeMovement);

    var initialX;
    var initialPos;
    function seeMovement(e) {
      initialX = e.clientX;
      getInitialPos();
      carouselContent.addEventListener("mousemove", slightMove);
      document.addEventListener("mouseup", moveBasedOnMouse);
    }

    function slightMove(e) {
      if (moving) {
        var movingX = e.clientX;
        var difference = initialX - movingX;
        if (Math.abs(difference) < lengthOfSlide / 4) {
          slightMoveSlides(difference);
        }
      }
    }

    function getInitialPos() {
      var slides = document.querySelectorAll(".slide");
      var slidesArray = Array.prototype.slice.call(slides);
      initialPos = [];
      slidesArray.forEach(function (el) {
        var left = Math.floor(parseInt(el.style.left.slice(0, -2)));
        console.log(left);

        initialPos.push(left);
      });
    }

    function slightMoveSlides(newX) {
      var slides = document.querySelectorAll(".slide");
      var slidesArray = Array.prototype.slice.call(slides);
      slidesArray.forEach(function (el, i) {
        var oldLeft = initialPos[i];
        el.style.left = oldLeft + newX + "px";
      });
    }

    function moveBasedOnMouse(e) {
      var finalX = e.clientX;
      if (initialX - finalX > 0) {
        moveRight();
      } else if (initialX - finalX < 0) {
        moveLeft();
      }
      document.removeEventListener("mouseup", moveBasedOnMouse);
      carouselContent.removeEventListener("mousemove", slightMove);
    }
  }, []);

  const slides = [
    <img
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      class="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/495e355e-017e-44dc-a9ee-6cd11899763f/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/495e355e-017e-44dc-a9ee-6cd11899763f/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/495e355e-017e-44dc-a9ee-6cd11899763f/nike-just-do-it.jpg"
    />,
    <img
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      class="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8d5cabf7-8185-471f-84d2-a89403b6d3eb/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8d5cabf7-8185-471f-84d2-a89403b6d3eb/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/8d5cabf7-8185-471f-84d2-a89403b6d3eb/nike-just-do-it.jpg"
    />,
    <img
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      class="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/465c9f08-2432-4b35-bcd8-5a8cbc29df34/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/465c9f08-2432-4b35-bcd8-5a8cbc29df34/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/465c9f08-2432-4b35-bcd8-5a8cbc29df34/nike-just-do-it.jpg"
    />,
    <img
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      class="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/15cdc7b5-6de0-4d5c-81e9-6d01fc944b18/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/15cdc7b5-6de0-4d5c-81e9-6d01fc944b18/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/15cdc7b5-6de0-4d5c-81e9-6d01fc944b18/nike-just-do-it.jpg"
    ></img>,
    <img
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      class="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/f0a04bde-ca73-405e-a895-eba7fc7cf2f2/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/f0a04bde-ca73-405e-a895-eba7fc7cf2f2/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/f0a04bde-ca73-405e-a895-eba7fc7cf2f2/nike-just-do-it.jpg"
    ></img>,

    <img
      draggable="false"
      data-qa="image-media-img"
      alt="Nike. Just Do It"
      class="_2cKlr7_w _32IPZERI _3jm9Bm_E guL_1FMX"
      data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/83c538c5-239b-49cf-8a44-b0924596e794/nike-just-do-it.jpg"
      data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/83c538c5-239b-49cf-8a44-b0924596e794/nike-just-do-it.jpg"
      data-image-loaded-class="guL_1FMX"
      src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/83c538c5-239b-49cf-8a44-b0924596e794/nike-just-do-it.jpg"
    ></img>,
  ];

  return (
    <div class="container">
<h2>Always Iconic</h2>

      <div class="carousel">

        <div class="nav nav-left">
          <div class="ion-chevron-left carousel-arrow-icon-left">
            <ArrowBackIosIcon
              style={{ color: "#000", fontSize: "15px", fontWeight: "800" }}
            ></ArrowBackIosIcon>
          </div>
        </div>

        <div class="carousel-content">
          {slides.map((slide) => {
            return (
              <div class="slide">
                <div>{slide}</div>
              </div>
            );
          })}
        </div>

        <div class="nav nav-right">
          <div class="ion-chevron-right carousel-arrow-icon-right">
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
