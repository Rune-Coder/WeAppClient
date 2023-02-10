import React from 'react';
import { useSelector } from 'react-redux';
import ChatHeader from './chatHeader';
import classes from './chats.module.css';
import MsgArea from './msgArea';

function Chats(props){

    const senderSub = useSelector((state) => state.senders.senderData);
    console.log(senderSub);

    return(
        <div className={classes.chatsContainer}>
            <ChatHeader />
            <MsgArea />
        </div>
    );
}

export default Chats;