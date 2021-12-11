import React from "react";

import backround from 'assets/Main.jpg'
import styles from './style.module.scss'


const BigImg = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.textwrapper}>
            <h1 className={styles.header} >
                Hello, I'm Artyom
            </h1>
            <span className = {styles.text}>Frontend React developer</span>
            </div>
            
        </div>
        
    )
}
export default BigImg;