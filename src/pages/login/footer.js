import React from 'react';
import classes from './footer.module.css';

function Footer(props){
    return(
        <div className={classes.footerContainer}>
            <ul className={classes.loginFooterList}>
                <li>
                    Meta
                </li>
                <li>
                    About
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Jobs
                </li>
                <li>
                    Help
                </li>
                <li>
                    API
                </li>
                <li>
                    Privacy
                </li>
                <li>
                    Terms
                </li>
            </ul>
            <ul className={classes.loginFooterList}>
                <li>
                    English(UK)
                </li>
                <li>
                    © 2022 WeApp by Souhardya Dutta
                </li>
            </ul>
        </div>
    );
}

export default Footer;