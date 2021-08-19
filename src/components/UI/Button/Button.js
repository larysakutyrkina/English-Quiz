import React from 'react';
import styles from './Button.module.scss'

const  Button = props =>  {
    const classes = [
        styles.button,
        styles[props.type]
    ]
    return (
        <button
            className={classes.join(' ')}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default Button;