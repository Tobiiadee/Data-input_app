import React from "react";
import styles from "./OutputItem.module.css"

const OutputItem = (props) => {
    // console.log(props.dataValue);
    const name = props.dataValue.name;    
    const age = props.dataValue.age + "YRS";   

    // console.log(name, age);

    return <div>
        <div className={styles.OutputItem}>
            <div className={styles["age-input"]}>{age}</div>
            <input type="text" readOnly value={name}/>
        </div>
    </div>
};

export default OutputItem;