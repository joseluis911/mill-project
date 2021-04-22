import React, { Component } from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

//https://juega-el-pollo.herokuapp.com
const server = "https://juega-el-pollo.herokuapp.com";

class NavigationItems extends Component {




    render() {
     

        return (
            <>

                <div className={classes.NavigationItems}>
               
                    <ul >
                    <NavigationItem>About us</NavigationItem>
                    <NavigationItem>Pharmacy</NavigationItem>
                    <NavigationItem>Medical Clinic</NavigationItem>
                    <NavigationItem>FAQ</NavigationItem>
                    <NavigationItem>Contact Us</NavigationItem>
                      
                    </ul>

                </div>
            </>
        )
    }

}

export default NavigationItems;
