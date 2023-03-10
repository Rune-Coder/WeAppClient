import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Chats from './msg/chats';
import classes from './home.module.css';
import MsgEmpty from './msg/msgEmpty';
import ProfileBar from './senders/profileBar';
import Senders from './senders/senders';
import axios from 'axios';
import url from '../../components/connect';

function Home(props){

    const userSub = useSelector((state) => state.login.loginData);
    const senderSub = useSelector((state) => state.senders.senderData);

    const [sendersList, setSendersList] = useState([]);

    useEffect(() => {
        async function getSenders(){
            
            const response = await axios.get(url+'/api/user/senders', {
                params: {
                  email: userSub.email
                }
            });
            setSendersList(response.data);
        }
        getSenders();
    }, [userSub]);

    const senders = sendersList.map((sendersInfo) => (
        <Senders 
            key = {sendersInfo._id} 
            senderId = {sendersInfo.userData.sub} 
            name = {sendersInfo.userData.name}
            dp = {sendersInfo.userData.picture} 
        />
    ));

    return(
        <div className={classes.messengerContainer}>
            <div className = {`${classes.senders} ${Object.keys(senderSub).length && classes.closeSenders}`}>
                <ProfileBar />
                {senders.length > 0 && <div className={classes.senderContainer}>{senders}</div>}
            </div>
            <div className = {`${!Object.keys(senderSub).length && classes.emptyChats} ${Object.keys(senderSub).length && classes.chats}`}>
                {Object.keys(senderSub).length ? <Chats /> : <MsgEmpty />}
            </div>
        </div>
    );
}
 
export default Home;