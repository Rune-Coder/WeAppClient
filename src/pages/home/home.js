import React from 'react';
import { useSelector } from 'react-redux';
import classes from './home.module.css';

function Home(props){

    const userSub = useSelector((state) => state.login.loginData);
    console.log(userSub);
    return(
        <div className={classes.messengerContainer}>
            hello
        </div>
    );
}

export default Home;