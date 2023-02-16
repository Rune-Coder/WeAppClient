import React, { useState, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import classes from './msgArea.module.css';
import TextBox from './textBox';
import axios from 'axios';
import url from '../../../components/connect';
import { useSelector } from 'react-redux';

function MsgArea(props){

    const socket = useSelector((state) => state.login.socket);
    const senderSub = useSelector((state) => state.senders.senderData);

    const [msg, setMsg] = useState("");
    const [isSend, setIsSend] = useState(false);
    const [file, setFile] = useState({});
    const [image, setImage] = useState("");
    const [val, setVal] = useState("");
    const [incomingMessage, setIncomingMessage] = useState({});
    
    function getMsgHandler(text){
        setMsg(text);
        if(isSend)
            setIsSend(false);
    }

    useEffect(() => {
        socket.on("getMessage", data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            });
        });
    }, [socket]);

    useEffect(() => {
        async function fileSend(){
            const data = new FormData();
            data.append("name", file.name);
            data.append("file", file);     
            const response = await axios.post(url+'/api/conversation/file-upload', data); 
            var fileLink = response.data;
            var links = fileLink.split("file/");
            fileLink = links[0]+"api/conversation/file-get?filename="+links[1];
            setImage(fileLink);
            setVal(file.name);
            
        }
        file.name && fileSend();
    }, [file]);

    useEffect(() => {
        incomingMessage.message && (incomingMessage.receiverId === senderSub.sub) && props.newMsg(incomingMessage);
    }, [incomingMessage, senderSub, props]);


    async function msgSend(event){// sending my message
        if(msg.trim() === "")
            return;
        setIsSend(true);

        var response, message = {};
        if(file.name){// check for file attach
             message = {
                senderId: props.senderId,
                receiverId: props.receiverId,
                conversationId: props.conversationId,
                message: image,
                type: "file"
            }; 
        }
        else{
            message = {
                senderId: props.senderId,
                receiverId: props.receiverId,
                conversationId: props.conversationId,
                message: msg,
                type: "text"
            }; 
        }

        socket.emit("sendMessage", message);

        response = await axios.post(url+'/api/conversation/msg-send', message); 
        props.msgFlag();
        setImage("");
        setFile({});
        setMsg("");
        setVal("");
        console.log(response);
    }

    function fileInputHandler(event){
        setFile(event.target.files[0]);
        setMsg(event.target.files[0].name);
        setVal("Uploading Please Wait...");
    }

    return(
        <div className={classes.msgAreaContainer}>
            <span className={classes.sendIcon} style={{rotate: "30deg"}}>
                <label htmlFor="fileInput" style={{cursor : "pointer"}}><AttachFileIcon /></label>
                <input type="file" id = "fileInput" style={{display : "none"}} onChange = {fileInputHandler} />
            </span>
            <TextBox send = {getMsgHandler} isSend = {isSend} val = {val}/>
            <span className={classes.sendIcon} onClick={msgSend}><SendIcon /></span>
        </div>
    );
}

export default MsgArea;