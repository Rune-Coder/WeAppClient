import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
import classes from './msgEmpty.module.css';

function MsgEmpty(props){

    return(
        <div className={classes.msgEmptyContainer}>
            <span className={classes.msgIcon}><FontAwesomeIcon icon={faWhatsapp} /></span>
            <p className={classes.msgHeader}>WeApp for Windows</p>
            <p>Send and recieve messages, files, etc.</p>
        </div>
    );
}

export default MsgEmpty;