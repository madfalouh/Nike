import React from 'react'
import './Login.css'
import First_section from '../../component/login/first_section/First_section'
import Second_section from '../../component/login/second_section/Second_section'
import nikeShoes from '../../assets/img/login-nike.png'



function Login() {

const blur = "|26Hy8D%00?bs;M{RjWB%M00Rj%Mxuofofj[M{t700-;~q9FWBxuayR*Rj_3xu9FM_t7M|Rj-;RjWBD%Rj?bj[Rjj[xuRjD%t7?bRjIUt7%ME1WBM{t7j[M{IUofxuM{xu_3IUIU%MxuozIUxut7M{xuIURj-;RjIUxuRj"


  return (
    <div className='login-container' >
    <First_section></First_section>
    <Second_section blur={blur} img ={nikeShoes}  ></Second_section>
    </div>
  )
}

export default Login
