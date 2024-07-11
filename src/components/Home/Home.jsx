import React from 'react'
import Login from '../Login/Login'
import imgLogin from "../../assets/images/login.png"

function Home() {
  return (
    <>
        <div className='flex-prnt-login'>
            <div className='flex-left'>
                <Login/>
            </div>
            <div className='flex-right'>
                <img src={imgLogin} alt='' />
            </div>
        </div>
    </>
  )
}

export default Home
