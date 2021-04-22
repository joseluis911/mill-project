import React from "react";

import classes from "./Drawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Button from "../Button/Button";
import CloseButtonIcon from '../../images/SVG/close_button.svg'
const Drawer = (props) => {
  return (
    <>
      <div
        className={[classes.Drawer, props.open ? "" : classes.Inactive].join(
          " "
        )}
      >
        <div className={classes.Logo}>
          <div>
            <Button type="rose">
              Get started
            </Button>
          </div>
            <img onClick={props.clicked} width="35px" src={CloseButtonIcon} alt="Milligram is here for you"/>
          <div>

          </div>
        </div>
        <div className={classes.Menu}>
          <NavigationItems clicked={props.clicked} />
        </div>
      </div>
    </>
  );
};

export default Drawer;
