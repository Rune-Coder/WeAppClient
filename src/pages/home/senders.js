import React from 'react';
import classes from './senders.module.css';

function Senders(props){

    return(
        <div className={classes.senderContainer}>
            <div className={classes.sendersPic}>
                <img className={classes.profilePic} src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1675964107~exp=1675964707~hmac=09082b1272c975ec45d65239a4aad37419a96cd0e83187097786bb7476e9b02d" alt="Profile"></img>
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