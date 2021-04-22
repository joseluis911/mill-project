import React from "react";
import classes from "./NavigationItem.module.css";
const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <div className={classes.Item}>{props.children}</div>
    </li>
  );
};

export default NavigationItem;
