import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import classes from './msgArea.module.css';
import TextBox from './textBox';

function MsgArea(props){


    return(
        <div className={classes.msgAreaContainer}>
            <span className={classes.sendIcon}><AttachFileIcon /></span>
            <TextBox />
            <span className={classes.sendIcon}><SendIcon /></span>
        </div>
    );
}

export default MsgArea;