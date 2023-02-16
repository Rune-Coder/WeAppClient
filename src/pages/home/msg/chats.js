import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import url from '../../../components/connect';
import ChatHeader from './chatHeader';
import classes from './chats.module.css';
import Message from './message';
import MsgArea from './msgArea';

function Chats(props){

    const senderSub = useSelector((state) => state.senders.senderData);
    const receiverSub = useSelector((state) => state.login.loginData);// receiver is me & sender is the other person

    const [conversation, setConversation] = useState({});//put conversation data
    const [allMsg, setAllMsg] = useState([]);//put all msgs
    const [msgFlag, setMsgFlag] = useState(false);//

    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior : "smooth"})
    }, [allMsg]);

    useEffect(() => {
        async function createConversation(){
            
            const response = await axios.post(url+'/api/conversation/create', {
                senderId: senderSub.senderId,
                receiverId: receiverSub.sub
            });
            setConversation(response.data);
            console.log(response);
        }
        createConversation();
    }, [senderSub.senderId, receiverSub.sub]);

    useEffect(() => {
        async function getMessages(){//getting the messages
            
            const response = await axios.get(url+'/api/conversation/msg-get', {
                params: {
                    id: conversation._id
                }
            });
            setAllMsg(response.data);
        }
        getMessages();
    }, [conversation._id, msgFlag]);

    const messages = allMsg.map((msg) => (
        <Message 
            key = {msg._id} 
            msgData = {msg}
        />
    ));

    function msgFlagHandler(){
        if(msgFlag)
            setMsgFlag(false);
        else
            setMsgFlag(true);
    }

    return(
        <div className={classes.chatsContainer}>
            <ChatHeader />
            <div style={{overflowY : "auto"}}>{messages}<div ref={scrollRef} /></div>
            <MsgArea senderId = {senderSub.senderId} receiverId = {receiverSub.sub} conversationId = {conversation._id} msgFlag = {msgFlagHandler} />
        </div>
    );
}

export default Chats;