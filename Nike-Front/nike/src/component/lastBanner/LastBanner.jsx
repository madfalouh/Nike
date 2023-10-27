import React from "react";
import "./LastBanner.css";
function LastBanner() {
  const slides = [
    <img
      data-qa="image-media-img"
      alt="Men's Shoes"
      class="_3jm9Bm_E guL_1FMX"
      src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/b93b8a0f-5891-4e52-813a-503044c04580/dunk-low-retro-mens-shoes-NgD3kx.png"
      data-landscape-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/b93b8a0f-5891-4e52-813a-503044c04580/dunk-low-retro-mens-shoes-NgD3kx.png"
      data-portrait-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/b93b8a0f-5891-4e52-813a-503044c04580/dunk-low-retro-mens-shoes-NgD3kx.png"
      data-image-loaded-class="guL_1FMX"
    />,

    <img
      data-qa="image-media-img"
      alt="Men's Golf Shoes"
      class="_3jm9Bm_E guL_1FMX"
      src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a0e57a40-ffdc-4f5f-a2a5-900742a9c0d5/air-jordan-i-high-g-mens-golf-shoes-ZgQdl6.png"
      data-landscape-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/a0e57a40-ffdc-4f5f-a2a5-900742a9c0d5/air-jordan-i-high-g-mens-golf-shoes-ZgQdl6.png"
      data-portrait-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/a0e57a40-ffdc-4f5f-a2a5-900742a9c0d5/air-jordan-i-high-g-mens-golf-shoes-ZgQdl6.png"
      data-image-loaded-class="guL_1FMX"
    />,

    <img
      data-qa="image-media-img"
      alt="Golf Shoes"
      class="_3jm9Bm_E guL_1FMX"
      src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/23d84f57-4c87-4a50-9120-df01e2e29d6d/air-jordan-1-low-g-golf-shoes-jChrQ3.png"
      data-landscape-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/23d84f57-4c87-4a50-9120-df01e2e29d6d/air-jordan-1-low-g-golf-shoes-jChrQ3.png"
      data-portrait-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/23d84f57-4c87-4a50-9120-df01e2e29d6d/air-jordan-1-low-g-golf-shoes-jChrQ3.png"
      data-image-loaded-class="guL_1FMX"
    />,

    <img
      data-qa="image-media-img"
      alt="Big Kids' Shoes"
      class="_3jm9Bm_E guL_1FMX"
      src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/76b9f5ba-1596-41c7-9b9a-d92362334101/air-jordan-1-low-big-kids-shoes-kAvvx4.png"
      data-landscape-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/76b9f5ba-1596-41c7-9b9a-d92362334101/air-jordan-1-low-big-kids-shoes-kAvvx4.png"
      data-portrait-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/76b9f5ba-1596-41c7-9b9a-d92362334101/air-jordan-1-low-big-kids-shoes-kAvvx4.png"
      data-image-loaded-class="guL_1FMX"
    />,

    <img
      data-qa="image-media-img"
      alt="Women's Shoes"
      class="_3jm9Bm_E guL_1FMX"
      src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/dc1dc7e3-5f90-448b-bb06-1876dca86fde/tech-hera-womens-shoes-NjvkxR.png"
      data-landscape-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/dc1dc7e3-5f90-448b-bb06-1876dca86fde/tech-hera-womens-shoes-NjvkxR.png"
      data-portrait-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/dc1dc7e3-5f90-448b-bb06-1876dca86fde/tech-hera-womens-shoes-NjvkxR.png"
      data-image-loaded-class="guL_1FMX"
    />,

    <img
      data-qa="image-media-img"
      alt="Men's Shoes"
      class="_3jm9Bm_E guL_1FMX"
      src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/1610ed87-c8dd-4453-b7a2-16c682441b67/air-max-90-premium-mens-shoes-9sg476.png"
      data-landscape-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/1610ed87-c8dd-4453-b7a2-16c682441b67/air-max-90-premium-mens-shoes-9sg476.png"
      data-portrait-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/1610ed87-c8dd-4453-b7a2-16c682441b67/air-max-90-premium-mens-shoes-9sg476.png"
      data-image-loaded-class="guL_1FMX"
    />,

    <img
      data-qa="image-media-img"
      alt="Big Kids' Shoes"
      class="_3jm9Bm_E guL_1FMX"
      src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/776b4fdb-49ba-48ab-8cd8-255c28441198/air-force-1-big-kids-shoes-xw5kjz.png"
      data-landscape-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/776b4fdb-49ba-48ab-8cd8-255c28441198/air-force-1-big-kids-shoes-xw5kjz.png"
      data-portrait-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/776b4fdb-49ba-48ab-8cd8-255c28441198/air-force-1-big-kids-shoes-xw5kjz.png"
      data-image-loaded-class="guL_1FMX"
    />,

    <img
      data-qa="image-media-img"
      alt="Big Kids' Shoes"
      class="_3jm9Bm_E guL_1FMX"
      src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/2594670a-120c-4ea6-8288-7b5f5b87623e/air-force-1-big-kids-shoes-km6NJj.png"
      data-landscape-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/2594670a-120c-4ea6-8288-7b5f5b87623e/air-force-1-big-kids-shoes-km6NJj.png"
      data-portrait-url="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/2594670a-120c-4ea6-8288-7b5f5b87623e/air-force-1-big-kids-shoes-km6NJj.png"
      data-image-loaded-class="guL_1FMX"
    />,
  ];

  return <div className="sm-banner-last">


<h2>Popular Right Now</h2>

<div className="sm-banner-slider"  >

{slides.map( (slide)=> {

return slide

}  )}

</div>


</div>;
}

export default LastBanner;
