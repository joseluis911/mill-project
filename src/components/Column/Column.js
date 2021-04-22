import React from 'react';

import classes from './Column.module.css';

const Column = (props) => {
    let column;
    switch (props.type) {
        case 'md6':
           column =  (<div className={classes.Md}>{props.children}</div>);
            break;
        case 'md6-displayNoneMobile':
            column =  (<div style={{backgroundColor: props.backgroundColor}} className={`${classes.Md} ${classes.DisplayNoneMobile}`}>{props.children}</div>);
            break;
        default: <div className={classes.Column}>{props.children}</div>
            break;
    }

    return column;


}


export default Column;