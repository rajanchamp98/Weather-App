import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SearchField from "./Components/SearchField";
import ShowField from "./Components/ShowField";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import ErrorPage from "./Components/ErrorPage";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchpage, setSearchpage] = useState(true);
  const[errorpage,setErrorpage]=useState(false);

  async function dataFetchMain(param) {
    setLoading(true);
    setData(null);
    const url = `https://api.weatherapi.com/v1/forecast.json?key=687087d478784b6dbdf175212230504&q=${param}&days=6&aqi=yes&alerts=yes`;
    return await axios.get(url
     );
  }

  async function dataFetch(value) {
    await dataFetchMain(value)
      .then((value) => {
        setLoading(false);
        setData(value);
        setSearchpage(false);
        console.log("dataFetched successfully");
      })
      .catch((error) => {
        console.log("error occured");
        setErrorpage(true);
        setSearchpage(false);
        setLoading(false);
      });
  }
  function parentSearchFunc() {
    setSearchpage(true);
  }
  return (
    <div className="App">
      <Navbar data={data} parentSearchFunc={parentSearchFunc}/>
      {searchpage ? (
        <SearchField parentFunc={dataFetch} loading={loading} data={data} />
      ) : (
        data && <ShowField datas={data} parentSearchFunc={parentSearchFunc} />
      )}
      {errorpage && <ErrorPage/>}
      <Footer />
    </div>
  );
}

export default App;
