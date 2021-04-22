import React from "react";
import classes from "./Section.module.css";

const Section = (props) => {
  let section;
  switch (props.type) {
    case 'flex':
        section = (
            <div
            className={classes.Section__Flex}
            style={{ backgroundColor: props.backgroundColor, color: props.color }}
          >
            {props.children}
          </div>
        )
      break;
    
      case 'onlyMobile':
        section = (
            <div
            className={classes.Section__OnlyMobile}
            style={{ backgroundColor: props.backgroundColor, color: props.color }}
          >
            {props.children}
          </div>
        )
      break;

    default:
      section = (
        <div
          className={classes.Section}
          style={{ backgroundColor: props.backgroundColor, color: props.color , padding: '50px 30px 0px 30px;'}}
        >
          {props.children}
        </div>
      );
      break;
  }

  return section;
};

export default Section;
