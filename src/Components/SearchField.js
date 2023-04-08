import React, { useState} from "react";
import "../Styling/SearchField.style.css";
import "../Resourse/Images/waves.svg";
import videos from "../Resourse/Video/Nature2.mp4"
import Loading from "./Loading";
// import { useNavigate } from "react-router";z



function SearchField({ parentFunc,loading }) {
  const [cityName, setCityName] = useState("");
  function clickHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    parentFunc(cityName);
    setCityName("");
  }

  return (
    <div className="SearchField">
      {loading && <Loading />}
      {/* <Loading/> */}
     
      
      <div className="backgroundVideo">
      <video className="myVideo" autoPlay muted loop>
      <source type="video/webm" src={videos} />
      </video>
      </div>
      
        <form className="searchBox" onSubmit={(e) => clickHandler(e)} name="form1">
      <input
        type="text"
        value={cityName}
        placeholder="Type City Name Here...."
        onChange={(e) => setCityName(e.target.value)}
        
      />
      <button type="submit" >
        Search
      </button>

      <section className="section">
        <div className="content">
          <div className="adjuster">
          <div className="div1" >
          <h2>Weather</h2>
          <h2>Weather</h2>
         </div>
         <div className="div2">
          <h2>App</h2>
          <h2>App</h2>
          </div> 
        </div>

          </div>
         
      </section>
    
     
      </form>
     
    </div>
  );
}

export default SearchField;
