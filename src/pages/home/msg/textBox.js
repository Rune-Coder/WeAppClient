import React from 'react';
import classes from './textBox.module.css';

function TextBox(props){


    return(
        <textarea type="text" className={classes.textBoxContainer}>
        </textarea>
    );
}

export default TextBox;