import React from 'react';
import { useSelector } from 'react-redux';
import classes from './chatHeader.module.css';

function ChatHeader(props){

    const senderSub = useSelector((state) => state.senders.senderData);

    return(
        <div className={classes.chatsHeaderContainer}>
            <ul className={classes.profileList}>
                <li>
                    <img className={classes.profilePic} src={senderSub.dp} alt="Profile"></img>
                </li>
                <li>
                    {senderSub.name}
                </li>
            </ul>
        </div>
    );
}

export default ChatHeader;