import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from '../home/home';
import Footer from './footer';
import classes from './login.module.css';
import LoginCard from './loginCard';

function Login(props){

    useEffect(() => {
        document.title = 'WeApp';
    });

    const loginSub = useSelector((state) => state.login.loggedin);

    return(
        <>
            {loginSub ? <Home /> :
            <>
                <div className={classes.loginContainer}>
                    <LoginCard />
                </div>
                <div className={classes.loginFooter}>
                    <Footer />
                </div>
            </>}
        </>
    );
}

export default Login;