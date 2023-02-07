import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import google from "../../images/google.png"
import classes from './loginCard.module.css';

function LoginCard(props){

    const login = useGoogleLogin({
        onSuccess: async tokenResponse => {
            try{
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${tokenResponse.access_token}`
                    }
                });
                const decodedData = res.data;
                console.log(decodedData);
            }
            catch(err){
                console.log('Login Failed', err);
            }
        },
      });

    return(
        <div className={classes.loginCardContainer}>
            <h1 className={classes.loginCardHeader}>WeApp</h1>
            <p>Login to your account</p>
            <div className={classes.googleLoginContainer}>
                <button type="button" className={classes.googleLoginBtn} onClick={() => login()}>
                    <img className={classes.googleIcon} src={google} alt="google" border="0" />Sign in with Google
                </button>
            </div>
        </div>
    );
}

export default LoginCard;