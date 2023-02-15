import React, { useState, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import classes from './msgArea.module.css';
import TextBox from './textBox';
import axios from 'axios';
import url from '../../../components/connect';

function MsgArea(props){

    const [msg, setMsg] = useState("");
    const [isSend, setIsSend] = useState(false);
    const [file, setFile] = useState({});
    const [image, setImage] = useState("");
    
    function getMsgHandler(text){
        setMsg(text);
        if(isSend)
            setIsSend(false);
    }

    useEffect(() => {
        async function fileSend(){
            const data = new FormData();
            data.append("name", file.name);
            data.append("file", file);
            
            const response = await axios.post(url+'/api/conversation/file-upload', data); 
            console.log(response.data);
            var fileLink = response.data;
            var links = fileLink.split("file/");
            fileLink = links[0]+"api/conversation/file-get?filename="+links[1];
            setImage(fileLink);
            
        }
        file.name && fileSend();
    }, [file]);


    async function msgSend(event){// sending my message
        if(msg.trim() === "")
            return;
        setIsSend(true);
        var response;
        if(file.name){// check for file attach
            console.log(image);
            response = await axios.post(url+'/api/conversation/msg-send', {
                senderId: props.senderId,
                receiverId: props.receiverId,
                conversationId: props.conversationId,
                message: image,
                type: "file"
            }); 
        }
        else{
            response = await axios.post(url+'/api/conversation/msg-send', {
                senderId: props.senderId,
                receiverId: props.receiverId,
                conversationId: props.conversationId,
                message: msg,
                type: "text"
            }); 
        }
        props.msgFlag();
        setImage("");
        setFile({});
        setMsg("");
        console.log(response);
    }

    function fileInputHandler(event){
        setFile(event.target.files[0]);
        setMsg(event.target.files[0].name);
    }

    return(
        <div className={classes.msgAreaContainer}>
            <span className={classes.sendIcon} style={{rotate: "30deg"}}>
                <label htmlFor="fileInput" style={{cursor : "pointer"}}><AttachFileIcon /></label>
                <input type="file" id = "fileInput" style={{display : "none"}} onChange = {fileInputHandler} />
            </span>
            <TextBox send = {getMsgHandler} isSend = {isSend}/>
            <span className={classes.sendIcon} onClick={msgSend}><SendIcon /></span>
        </div>
    );
}

export default MsgArea;