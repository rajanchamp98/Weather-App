import React from 'react'
import '../Styling/ErrorPage.style.css'
import imgError from '../Resourse/Images/200.webp'

const ErrorPage = () => {
  return (
    <div className='errorPage'>
        <img src={imgError} alt="Nan" />
        <h1>Internet Connection Failed!</h1>
    </div>
  )
}

export default ErrorPage