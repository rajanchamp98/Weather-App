import React from "react";
import "../Styling/Loading.style.css";
import loading_image from "../Resourse/Images/loading1.gif";
// import { useRef, useEffect } from "react";

function Loading() {
  // console.log(data)
  // const spanRef = useRef("");
  // useEffect(() => {
  //   spanRef.current.innerHTML = "";
  //   let timeout="";
  //   `.......... `.split("").forEach((value, index) => {
  //      timeout=setTimeout(() => {
  //       spanRef.current.innerHTML += value;
  //     }, 500 * index);
  //   });
  //   return ()=> clearTimeout(timeout);
  // }, []);
 

  return (
    <div className="loading">
      <div className="popupbox">
        <img src={loading_image} alt="nan" />
        <h3>Loading....</h3>
      </div>
    </div>
  );
}

export default Loading;
