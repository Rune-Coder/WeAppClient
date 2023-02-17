import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classes from './chatHeader.module.css';
import { senderActions } from '../../../store/senderStore';

function ChatHeader(props){

    const senderSub = useSelector((state) => state.senders.senderData);
    const activeUsers = useSelector((state) => state.login.activeUsers);
    
    const dispatch = useDispatch();

    function backHandler(event){
        dispatch(senderActions.person({senderData: {}}));
    }

    return(
        <div className={classes.chatsHeaderContainer}>
            <ul className={classes.profileList}>
                <li className={classes.backArrow} onClick={backHandler}>
                    <ArrowBackIcon />
                </li>
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