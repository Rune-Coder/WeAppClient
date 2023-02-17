import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import url from '../../../components/connect';
import { senderActions } from '../../../store/senderStore';
import classes from './senders.module.css';

function Senders(props){

    const dispatch = useDispatch();

    const senderSub = useSelector((state) => state.senders.senderData);
    const receiverSub = useSelector((state) => state.login.loginData);
    const messageSub = useSelector((state) => state.senders.recentMsg);

    const [conversation, setConversation] = useState({});

    function openChat(){
        dispatch(senderActions.person({senderData: props}));
    }

    useEffect(() => {// create the conversation
        async function createConversation(){
            
            const response = await axios.post(url+'/api/conversation/create', {
                senderId: props.senderId,
                receiverId: receiverSub.sub
            });
            setConversation(response.data);
            console.log(response);
        }
        createConversation();
    }, [senderSub.senderId, props.senderId, receiverSub.sub, messageSub]);

    var currTime = "", liveMessage = "";

    if(conversation.updatedAt){
        var time = new Date(conversation.updatedAt);
        var hours = time.getHours();
        var meridiem = (hours >= 12) ? "PM": "AM";
        hours = (hours > 12) ? hours-12: hours;
        var min = time.getMinutes();
        hours = (hours === 0) ? 12: hours;
        currTime = hours+":"+("0" + min).slice(-2)+" "+meridiem;
        
        liveMessage = (conversation.message.includes("https://weappserver-production.up.railway.app")) ? conversation.message.split("file-")[2] : conversation.message;
    }

    return(
        <div className={classes.senderContainer} onClick={openChat}>
            <div className={classes.sendersPic}>
                <img className={classes.profilePic} src={props.dp} alt="Profile"></img>
            </div>
            <div className={classes.sendersChats}>
                <p className={classes.sendersName}>{props.name}</p>
                <p className={classes.sendersMsg}>{liveMessage}</p>
            </div>
            <div className={classes.sendersTime}>
                {currTime}
            </div>
        </div>
    );
}

export default Senders;