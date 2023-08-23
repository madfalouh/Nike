import React from 'react'
import './second_section.css'
import nikeShoes from '../../../assets/img/login-nike.png'
import ImageComponement from '../../imageBlur/ImageComponement'

function Second_section() {
const blur = "|26Hy8D%00?bs;M{RjWB%M00Rj%Mxuofofj[M{t700-;~q9FWBxuayR*Rj_3xu9FM_t7M|Rj-;RjWBD%Rj?bj[Rjj[xuRjD%t7?bRjIUt7%ME1WBM{t7j[M{IUofxuM{xu_3IUIU%MxuozIUxut7M{xuIURj-;RjIUxuRj"
  return (
<div className="login-second-section-container">
<ImageComponement src={nikeShoes} blur={blur}  ></ImageComponement>
    </div>
  )
}

export default Second_section
