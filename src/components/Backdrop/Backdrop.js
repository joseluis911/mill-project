import React from 'react'
import ReactDOM from 'react-dom';

import classes from './Backdrop.module.css';

const backdrop = props =>
  ReactDOM.createPortal(
    <div
      className={[classes.Backdrop, props.open ? 'open' : ''].join(' ')}
      onClick={props.clicked}
    />,
    document.getElementById('backdrop-root')
  );
  
  


export default backdrop;
