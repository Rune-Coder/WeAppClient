import React from 'react';
import classes from './textBox.module.css';

function TextBox(props){

    function message(event){
        props.send(event.target.value);
    }


    return(
        <textarea type="text" className={classes.textBoxContainer} onChange={message}>
        </textarea>
    );
}

export default TextBox;