import React, { Component } from "react";

import classes from "./Appbar.module.css";
import Box from "../Box/Box";
import Logo from "../../images/SVG/logo.svg";
import Snackbar from "../Appbar/Snackbar/Snackbar";
import Button from "../Button/Button";
import Drawer from "../Drawer/Drawer";
import Backdrop from "../Backdrop/Backdrop";
class Appbar extends Component {
  state = {
    openDrawer: false,
  };

  openDrawerHandler = () => {
    const { openDrawer } = this.state;
    this.setState({ openDrawer: !openDrawer });
    console.log(openDrawer);
  };

  render() {
    return (
      <div className={classes.Appbar}>
        {this.state.openDrawer && <Backdrop clicked={this.openDrawerHandler} />}

        <Box margin="0px 30px">
          <Snackbar clicked={this.openDrawerHandler} />
          <Drawer
            open={this.state.openDrawer}
            clicked={this.openDrawerHandler}
          />
        </Box>
        <div>
          <img
            className={classes.LogoImage}
            src={Logo}
            width="100px"
            alt="milligram Logo, Digital Pharmacy on Vancouver"
          />
        </div>
        <div className={classes.Button__Box}>
          <div className={classes.Button__Box_GetStarted}>
            <Button type="primary">Get Started</Button>
          </div>
          <div>
            <Button type="login">Login</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Appbar;
