import React from 'react';
import { useSelector } from 'react-redux';
import Chats from './msg/chats';
import classes from './home.module.css';
import MsgEmpty from './msg/msgEmpty';
import ProfileBar from './senders/profileBar';
import Senders from './senders/senders';

function Home(props){

    const userSub = useSelector((state) => state.login.loginData);
    console.log(userSub);

    const senderSub = useSelector((state) => state.senders.senderData);

    const sendersList = [
        {
            _id: "1",
            name: "Ram",
            msg: "Meet me nowsjhg uhfv kuuhggsfk diuhh ss gs bsk v",
            time: "Yesterday",
            pic: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1675964107~exp=1675964707~hmac=09082b1272c975ec45d65239a4aad37419a96cd0e83187097786bb7476e9b02d"
        },
        {
            _id: "2",
            name: "Shyam",
            msg: "Hii",
            time: "12:00",
            pic: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1675964107~exp=1675964707~hmac=09082b1272c975ec45d65239a4aad37419a96cd0e83187097786bb7476e9b02d"
        },
        {
            _id: "3",
            name: "Madhu",
            msg: "",
            time: "",
            pic: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1675964107~exp=1675964707~hmac=09082b1272c975ec45d65239a4aad37419a96cd0e83187097786bb7476e9b02d"
        },
    ];

    const senders = sendersList.map((sendersInfo) => (
        <Senders 
            key = {sendersInfo._id} 
            name = {sendersInfo.name}
            msg = {sendersInfo.msg} 
            time = {sendersInfo.time} 
            dp = {sendersInfo.pic} 
        />
    ));

    return(
        <div className={classes.messengerContainer}>
            <div className={classes.senders}>
                <ProfileBar />
                <div className={classes.senderContainer}>{senders}</div>
            </div>
            <div className={classes.chats}>
                {Object.keys(senderSub).length ? <Chats /> : <MsgEmpty />}
            </div>
        </div>
    );
}
 
export default Home;