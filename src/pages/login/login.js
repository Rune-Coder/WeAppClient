import React, { useEffect } from 'react';
import classes from './login.module.css';
import LoginCard from './loginCard';

function Login(props){

    useEffect(() => {
        document.title = 'WeApp Login';
    });

    return(
        <div className={classes.loginContainer}>
            <LoginCard />
        </div>
    );
}

export default Login;