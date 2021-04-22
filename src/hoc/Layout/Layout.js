import React from 'react';

import classes from './Layout.module.css';
import Appbar from '../../components/Appbar/Appbar';
const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <div>
               <Appbar/>
            </div>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;