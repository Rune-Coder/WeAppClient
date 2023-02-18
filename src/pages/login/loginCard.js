import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/loginStore';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import google from "../../images/google.png"
import classes from './loginCard.module.css';
import url from '../../components/connect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function LoginCard(props){

    const[preloader, setPreLoader] = useState(false);

    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: async tokenResponse => {
            try{
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${tokenResponse.access_token}`
                    }
                });
                const decodedData = res.data;

                setPreLoader(true);

                const response = await axios.post(url+'/api/user/login', decodedData);
                console.log(response);
                setPreLoader(false);

                dispatch(loginActions.accountInfo({userData: decodedData}));
            }
            catch(err){
                console.log('Login Failed', err);
            }
        },
      });

    return(
        <>
        {preloader && <div className={classes.preloader}><span className={classes.msgIcon}><FontAwesomeIcon icon={faWhatsapp} /></span></div>}
        {!preloader && <div className={classes.loginCardContainer}>
            <h1 className={classes.loginCardHeader}>WeApp</h1>
            <p>Login to your account</p>
            <div className={classes.googleLoginContainer}>
                <button type="button" className={classes.googleLoginBtn} onClick={() => login()}>
                    <img className={classes.googleIcon} src={google} alt="google" border="0" />Sign in with Google
                </button>
            </div>
        </div>}
        </>
    );
}

export default LoginCard;