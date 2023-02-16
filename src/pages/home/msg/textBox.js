import React from 'react';
import classes from './textBox.module.css';

function TextBox(props){

    function message(event){
        props.send(event.target.value);
    }

    if(props.isSend)
        document.getElementById("textArea").value = "";
    if(props.val !== "")
        document.getElementById("textArea").value = props.val;

    return(
        <textarea type="text" id="textArea" className={classes.textBoxContainer} onChange={message}>
        </textarea>
    );
}

export default TextBox;