import React from 'react'
import imgLogin from "../../assets/images/login.png"

function Dashboard() {
  return (
    <>
        <div className='flex-prnt-login'>
            <div className='flex-left'>
                <h3>Dashboard</h3>
            </div>
            <div className='flex-right'>
                <img src={imgLogin} alt='' />
            </div>
        </div>
    </>
  )
}

export default Dashboard
