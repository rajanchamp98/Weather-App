import React from 'react'
// import { Link } from 'react-router-dom';
import '../Styling/Navbar.style.css';
import sunImg from '../Resourse/Images/113.png'


function Navbar({data, parentSearchFunc}) {
 const clickHandler=(e)=>{
  e.stopPropagation();
  parentSearchFunc()

 }
  return (
    <div className="navbar">
      <div className="Heading">
      <h2>Weather App</h2>

      <img src={sunImg} alt="" />
  
      </div>
   
    {data && <button onClick={(e)=>{clickHandler(e)}}> Search Another City</button>}
  </div>
  )
}

export default Navbar