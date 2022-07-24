import React from 'react';
import classes from './MyLabel.module.css'

const MyLabel = React.forwardRef(function (props, ref) {
    return (
        <label ref={ref} className={classes.myLabel} {...props}/>
    )
});

export default MyLabel;