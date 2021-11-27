import React from "react";
import styles from "./style.module.scss" 

const Contacts = ()=>{
    return(
        <div>
            <h3 className={styles.link}>Made by Artyom Bahryantsev</h3>
            <a className={styles.link} href = 'mailto: bahryantsev@gmail.com'>bahryantsev@gmail.com</a>
        </div>
    )
}
export default Contacts