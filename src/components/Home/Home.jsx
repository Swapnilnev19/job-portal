import React from 'react'
import imgLogin from "../../assets/images/login.png"
import FormCommon from '../CommonForm/FormCommon'

function Home() {
  return (
    <>
        <div className='flex-prnt-login'>
            <div className='flex-left'>
                <FormCommon />
            </div>
            <div className='flex-right'>
                <img src={imgLogin} alt='' />
            </div>
        </div>
    </>
  )
}

export default Home
