import React from "react";
import "./Sm_banner.css";
import { useNavigate } from "react-router";
function Sm_banner() {
const navigate = useNavigate()
  return (
    <div className="sm-banner">
      <h2>Trending</h2>

      <div className="sm-imgs">
        <div className="img-1">
          <div className="img-shop">
            <p> Style your Summer </p>
            <h2>Discover you Cold Summer</h2>
            <button onClick={()=>{ navigate("/shop") }}  >Shop</button>
          </div>

          <img
            data-qa="image-media-img"
            alt="Nike. Just Do It"
            className="_32IPZERI _3jm9Bm_E guL_1FMX"
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/23645cc6-be3b-426b-8611-a9c9fb79d2ef/nike-just-do-it.jpg"
            data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/23645cc6-be3b-426b-8611-a9c9fb79d2ef/nike-just-do-it.jpg"
            data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/23645cc6-be3b-426b-8611-a9c9fb79d2ef/nike-just-do-it.jpg"
            data-image-loaded-class="guL_1FMX"
          ></img>
        </div>

        <div className="img-2">
          <div className="img-shop">
            <p> Shop your Style </p>
            <h2>Discover you Cold Summer</h2>
            <button  onClick={()=>{ navigate("/shop") }}  >Shop</button>
          </div>
          <img
            data-qa="image-media-img"
            alt="Nike. Just Do It"
            className="_32IPZERI _3jm9Bm_E guL_1FMX"
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/7dcb2154-db64-4627-ad41-3f385a9b8240/nike-just-do-it.jpg"
            data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/7dcb2154-db64-4627-ad41-3f385a9b8240/nike-just-do-it.jpg"
            data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/7dcb2154-db64-4627-ad41-3f385a9b8240/nike-just-do-it.jpg"
            data-image-loaded-class="guL_1FMX"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Sm_banner;
