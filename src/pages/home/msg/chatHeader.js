import React from 'react';
import { useSelector } from 'react-redux';
import classes from './chatHeader.module.css';

function ChatHeader(props){

    const senderSub = useSelector((state) => state.senders.senderData);
    const activeUsers = useSelector((state) => state.login.activeUsers);

    return(
        <div className={classes.chatsHeaderContainer}>
            <ul className={classes.profileList}>
                <li>
                    <img className={classes.profilePic} src={senderSub.dp} alt="Profile"></img>
                </li>
                <li className={classes.profileStatus}>
                    <div>{senderSub.name}</div>
                    <div className={classes.onlineStatus}>
                        {activeUsers?.find(user => user.sub === senderSub.senderId) ? "Online": "Offline"}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ChatHeader;