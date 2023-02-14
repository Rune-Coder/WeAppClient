import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import classes from './msgArea.module.css';
import TextBox from './textBox';
import axios from 'axios';
import url from '../../../components/connect';

function MsgArea(props){

    const [msg, setMsg] = useState("");
    const [isSend, setIsSend] = useState(false);
    
    function getMsgHandler(text){
        setMsg(text);
        if(isSend)
            setIsSend(false);
    }

    async function msgSend(event){// sending my message
        if(msg.trim() === "")
            return;
        setIsSend(true);
        const response = await axios.post(url+'/api/conversation/msg-send', {
            senderId: props.senderId,
            receiverId: props.receiverId,
            conversationId: props.conversationId,
            message: msg,
            type: "text"
        }); 
        props.msgFlag();
        console.log(response);
    }

    return(
        <div className={classes.msgAreaContainer}>
            <span className={classes.sendIcon}><AttachFileIcon /></span>
            <TextBox send = {getMsgHandler} isSend = {isSend}/>
            <span className={classes.sendIcon} onClick={msgSend}><SendIcon /></span>
        </div>
    );
}

export default MsgArea;