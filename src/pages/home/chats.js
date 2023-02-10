import React from 'react';
import { useSelector } from 'react-redux';
import classes from './chats.module.css';

function Chats(props){

    const senderSub = useSelector((state) => state.senders.senderData);
    console.log(senderSub);

    return(
        <div className={classes.chatsContainer}>
            hello
        </div>
    );
}

export default Chats;