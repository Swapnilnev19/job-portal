import React from 'react'
import imgLogin from "../../assets/images/login.png"

function UserDashboard() {
  return (
    <>
        <div className='flex-prnt-login'>
            <div className='flex-left'>
                <h3 color='red'>User Dashboard</h3>
            </div>
            <div className='flex-right'>
                <img src={imgLogin} alt='' />
            </div>
        </div>
    </>
  )
}

export default UserDashboard
