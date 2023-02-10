import React from 'react';
import { useSelector } from 'react-redux';
import classes from './profileBar.module.css';

function ProfileBar(props){

    const userSub = useSelector((state) => state.login.loginData);
    return(
        <div className={classes.profileContainer}>
            <ul className={classes.profileList}>
                <li>
                    <img className={classes.profilePic} src={userSub.picture} alt="Profile"></img>
                </li>
                <li>
                    {userSub.name}
                </li>
                <li>
                    WeApp
                </li>
            </ul>
        </div>
    );
}

export default ProfileBar;