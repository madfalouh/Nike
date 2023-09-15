import React from 'react'
import './second_section.css'
import ImageComponement from '../../imageBlur/ImageComponement'

function Second_section({img , blur}) {

console.log(img);

  return (
<div className="login-second-section-container">
<ImageComponement src={img} blur={blur}  ></ImageComponement>
    </div>
  )
}

export default Second_section
