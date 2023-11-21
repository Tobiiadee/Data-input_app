import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
    const classes = props.className + style.Card

    return <div className={classes}>{props.Children}</div>
};

export default Card;