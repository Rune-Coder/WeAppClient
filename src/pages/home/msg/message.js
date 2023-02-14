import React from 'react';
import classes from './chats.module.css';

function Message(props){
    return(
        <div>
            {props.msgData.message}
        </div>
    );
}

export default Message;