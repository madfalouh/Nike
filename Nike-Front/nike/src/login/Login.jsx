import React from 'react'
import './Login.css'
import First_section from '../componements/login/first_section/First_section'
import Second_section from '../componements/login/second_section/Second_section'

function Login() {
  return (
    <div className='login-container' >
    <First_section></First_section>
    <Second_section></Second_section>
    </div>
  )
}

export default Login
