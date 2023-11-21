/** @format */

import React, { useState } from "react";
import styles from "./DataInput.module.css";
import Button from "../../Button/Button";
import OnError from "../../UI/OnError/OnError";

const DataInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const inputNameHandler = (e) => {
    const name = e.target.value;
    setEnteredName(name);
  };

  const inputAgeHandler = (e) => {
    const age = e.target.value;
    setEnteredAge(age);
  };

  const onErrorHandler = () => {
    setError(null);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid",
        message: "Please enter a valid name and age (non-empty values)",
      });

      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age ( > 0 )",
      });
      return;
    }

    const inputData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random(),
    };

    // console.log(inputData);

    props.collectInputData(inputData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div>
      {error && (
        <OnError
          title={error.title}
          message={error.message}
          onClick={onErrorHandler}
        />
      )}
      <form className={styles["form-control"]} onSubmit={onSubmitHandler}>
        <div className={styles.controls}>
          <div className={styles.input}>
            <label>Username</label>
            <input
              type='text'
              className={styles["name-input"]}
              onChange={inputNameHandler}
              value={enteredName}
            />
          </div>

          <div className={styles.input}>
            <label>Age (Years)</label>
            <input
              type='number'
              step='1'
              className={styles["age-input"]}
              onChange={inputAgeHandler}
              value={enteredAge}
            />
          </div>

          <Button />
        </div>
      </form>
    </div>
  );
};

export default DataInput;

//<OnError title={title} message={message} onClick={}/>;

//Using refs
//e.g
//import React, { usRef } from 'react';
// const nameInput = useRef();

//const name = nameInput.current.value; This gets the value from the element

//using ref gets the value from the HTML element... It can also be used to manipulate the DOM...This should be bearly done..
//Instead of using useState which gets every single key stroke, you can use Ref instead, to get the exact value instead...