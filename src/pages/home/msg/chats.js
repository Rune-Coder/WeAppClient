import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import url from '../../../components/connect';
import { loginActions } from '../../../store/loginStore';
import ChatHeader from './chatHeader';
import classes from './chats.module.css';
import Message from './message';
import MsgArea from './msgArea';

function Chats(props){

    const senderSub = useSelector((state) => state.senders.senderData);
    const receiverSub = useSelector((state) => state.login.loginData);// receiver is me & sender is the other person
    const socket = useSelector((state) => state.login.socket);

    const dispatch = useDispatch();

    const [conversation, setConversation] = useState({});//put conversation data
    const [allMsg, setAllMsg] = useState([]);//put all msgs
    const [msgFlag, setMsgFlag] = useState(false);//check whether msg is sent or not
    const [activeUsers, setActiveUsers] = useState([]);//active users online using socket


    const scrollRef = useRef(null);

    useEffect(() => {// scroll to bottom always
        scrollRef.current?.scrollIntoView({ behavior : "smooth"})
    }, [allMsg]);

    useEffect(() => {// create the conversation
        async function createConversation(){
            
            const response = await axios.post(url+'/api/conversation/create', {
                senderId: senderSub.senderId,
                receiverId: receiverSub.sub
            });
            setConversation(response.data);
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
    }, [conversation._id, msgFlag, allMsg]);

    const messages = allMsg.map((msg) => (
        <Message 
            key = {msg._id} 
            msgData = {msg}
        />
    ));

    useEffect(() => {
        socket.emit("addUsers", receiverSub);
        socket.on("getUsers", users=>{
            setActiveUsers(users);
        });
    }, [socket, receiverSub]);

    useEffect(() => {//get active users
        dispatch(loginActions.activeUsersState({activeUserData: activeUsers}));
        console.log(activeUsers);
    }, [activeUsers, dispatch]);

    function msgFlagHandler(){
        if(msgFlag)
            setMsgFlag(false);
        else
            setMsgFlag(true);
    }

    function newMsgHandler(msg){
        setAllMsg(prev => [...prev, msg]);
    }

    return(
        <div className={classes.chatsContainer}>
            <ChatHeader />
            <div style={{overflowY : "auto"}}>{messages}<div ref={scrollRef} /></div>
            <MsgArea 
                senderId = {senderSub.senderId} 
                receiverId = {receiverSub.sub} 
                conversationId = {conversation._id} 
                msgFlag = {msgFlagHandler} 
                newMsg = {newMsgHandler}
            />
        </div>
    );
}

export default Chats;