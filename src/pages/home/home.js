import React from 'react';
import { useSelector } from 'react-redux';
import classes from './home.module.css';
import ProfileBar from './profileBar';
import Senders from './senders';

function Home(props){

    const userSub = useSelector((state) => state.login.loginData);
    console.log(userSub);

    const sendersList = [
        {
            _id: "1",
            name: "Ram",
            msg: "Meet me nowsjhg uhfv kuuhggsfk diuhh ss gs bsk v",
            time: "Yesterday",
            pic: "dp"
        },
        {
            _id: "2",
            name: "Shyam",
            msg: "Hii",
            time: "12:00",
            pic: "dp"
        },
        {
            _id: "3",
            name: "Madhu",
            msg: "",
            time: "",
            pic: "dp"
        }
    ];

    const senders = sendersList.map((sendersInfo) => (
        <Senders 
            key = {sendersInfo._id} 
            name = {sendersInfo.name}
            msg = {sendersInfo.msg} 
            time = {sendersInfo.time} 
            pic = {sendersInfo.pic} 
        />
    ));

    return(
        <div className={classes.messengerContainer}>
            <div className={classes.senders}>
                <ProfileBar />
                {senders}
            </div>
            <div className={classes.chats}>
                chats
            </div>
        </div>
    );
}

export default Home;