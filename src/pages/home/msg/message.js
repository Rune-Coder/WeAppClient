import React from 'react';
import { useSelector } from 'react-redux';
import classes from './message.module.css';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

function Message(props){
    const userSub = useSelector((state) => state.login.loginData);

    var time = new Date(props.msgData.updatedAt);
    var hours = time.getHours();
    hours = (hours > 12) ? hours-12: hours;
    var min = time.getMinutes();
    var meridiem = (hours >= 12) ? "PM": "AM";
    hours = (hours === 0) ? 12: hours;
    var ext = /jpg|jpeg|png|gif/;

    return(
        <div className={classes.msgContainer}>
            <div className = {`${userSub.sub === props.msgData.receiverId && classes.receiverMsg}  ${userSub.sub !== props.msgData.receiverId && classes.senderMsg}`} >
                {props.msgData.type === "text" && props.msgData.message}
                {(props.msgData.type === "file" && !ext.test(props.msgData.message)) && <div className={classes.displayFile}>
                    {props.msgData.message.split("file-")[2]}
                    <span className={classes.downloadFile}><DownloadForOfflineOutlinedIcon /></span>
                </div>}
                {(props.msgData.type === "file" && ext.test(props.msgData.message)) && <div className={classes.displayImage}>
                    <img className={classes.imageFile} src={props.msgData.message} alt= "Pic"></img>
                    <span className={classes.downloadImage}>{props.msgData.message.split("file-")[2]}<DownloadForOfflineOutlinedIcon /></span>
                </div>}
                <div className={classes.msgTime}>{hours+":"+min+" "+meridiem}</div>
            </div>
        </div>
    );
}

export default Message;