import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  let button;
    switch(props.type){
      case 'login': 
      button = (<button className={classes.Login}>{props.children}</button>);
      break;

      case 'primary': 
      button = (<button className={classes.Primary}>{props.children}</button>);
      break;
      case 'secondary':
      button = (<button className={classes.Secondary}>{props.children}</button>);
      break;
      case 'rose':
        button = (<button className={classes.Rose}>{props.children}</button>);
        break;
      default: 
      button = (<button className={classes.Button}>{props.children}</button>);
    }
  return button;
};

export default Button;
