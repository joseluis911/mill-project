import React from 'react';
import classes from './Box.module.css';

const Box  = (props) => {
    return (
        <div style={{margin: props.margin}} className={classes.Box}>{props.children}</div>
    )
}

export default Box;