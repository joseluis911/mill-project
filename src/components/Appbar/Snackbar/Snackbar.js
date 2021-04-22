import React from 'react';
import classes from './Snackbar.module.css';

const Snackbar = (props) => {
 return (
     <div onClick={props.clicked} className={classes.Snackbar}>
         <div></div>
         <div></div>
         <div></div>
     </div>
 )
}

export default Snackbar;