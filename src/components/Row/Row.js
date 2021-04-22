import React from 'react';
import classes from './Row.module.css';


const Row = (props) => {
    let row;
    switch (props.type) {
        case 'onlyDesktop':
            row = ( <div className={classes.Row__OnlyDesktop}>{props.children}</div>)
            break;
    
        default: 
        row = ( <div className={classes.Row}>{props.children}</div>)
            break;
    }
 return row;
}


export default Row;