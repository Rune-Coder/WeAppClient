import React from 'react';
import { useDispatch } from 'react-redux';
import { senderActions } from '../../store/senderStore';
import classes from './senders.module.css';

function Senders(props){

    const dispatch = useDispatch();

    function openChat(){
        dispatch(senderActions.person({senderData: props}));
    }

    return(
        <div className={classes.senderContainer} onClick={openChat}>
            <div className={classes.sendersPic}>
                <img className={classes.profilePic} src={props.dp} alt="Profile"></img>
            </div>
            <div className={classes.sendersChats}>
                <p className={classes.sendersName}>{props.name}</p>
                <p className={classes.sendersMsg}>{props.msg}</p>
            </div>
            <div className={classes.sendersTime}>
                {props.time}
            </div>
        </div>
    );
}

export default Senders;