/** @format */

import React from "react";
import styles from "./OutputList.module.css";

import OutputItem from "../OutputItem/OutputItem";

const OutputList = (props) => {
  let Output = <p className={styles.Output}>Input data...</p>;
//   console.log(props.data);

  if (props.data.length > 0) {
    Output = props.data.map((data) => {
      return <OutputItem dataValue={data} key={data.id}/>;
    });
  }

  return <ul className={styles.OutputList}>{Output}</ul>;
};

export default OutputList;
