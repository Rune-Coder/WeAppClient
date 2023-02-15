import React from 'react';
import { useSelector } from 'react-redux';
import classes from './message.module.css';

function Message(props){
    const userSub = useSelector((state) => state.login.loginData);

    var time = new Date(props.msgData.updatedAt);
    var hours = time.getHours();
    hours = (hours > 12) ? hours-12: hours;
    var min = time.getMinutes();
    var meridiem = (hours >= 12) ? "PM": "AM";


    return(
        <div className={classes.msgContainer}>
            <div className = {`${userSub.sub === props.msgData.receiverId && classes.receiverMsg}  ${userSub.sub !== props.msgData.receiverId && classes.senderMsg}`} >
                {props.msgData.message}
                <div className={classes.msgTime}>{hours+":"+min+" "+meridiem}</div>
            </div>
        </div>
    );
}

export default Message;