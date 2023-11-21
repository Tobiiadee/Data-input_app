/** @format */

import React from "react";
import style from "./OnError.module.css";

const OnError = (props) => {
  return (
    <div>
      <div className={style["error-background"]} onClick={props.onClick}>
        <div className={style["empty-data"]}>
          <div className={style.invalid}>{props.title}</div>

          <div className={style.para}>
            <p>{props.message}</p>
            <button
              className={style.btn}
              type={props.type || "button"}
              onClick={props.onClick}>
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnError;

//Please enter a valid name and age (non-empty values)
//Invalid
