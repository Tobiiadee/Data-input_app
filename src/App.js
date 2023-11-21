/** @format */

import React, { useState } from "react";
import DataInput from "./Components/DataInput/ValidDataInput/DataInput";
import OutputList from "./Components/DataOutput/OutputList/OuputList";
import style from "./App.module.css";

const dataV = [];

function App() {
  const [enteredData, setEnteredData] = useState(dataV);

  const inputDataHandler = (inputData) => {
    setEnteredData((prevData) => {
      return [inputData, ...prevData];
    });
  };

  return (
    <div className={style.App}>
      <DataInput collectInputData={inputDataHandler} />
      <OutputList data={enteredData} /> 
    </div>
  );
}

export default App;
