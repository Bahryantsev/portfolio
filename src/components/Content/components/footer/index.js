import React from "react";
import styles from "./styles/style.module.scss"
import Contacts from "./components/contacts";


import SocialMenu from "./components/SocialMenu";




const Footer = ()=>{
    return(
        <div className = {styles.footer}>
            <div>
            <Contacts/>
            </div>
            <SocialMenu/>
        </div>
    )
}
export default  Footer;