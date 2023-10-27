import React from 'react'
import "./Error.css"
function Error(props) {
  return (
        <div className="error-container">
          <div className='error-message-cmpt' >  {props.message || 'An error occurred.'} </div>
        </div>
  )
}

export default Error
