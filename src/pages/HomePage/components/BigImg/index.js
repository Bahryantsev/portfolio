import React from "react";
import BackgroundImage from "components/BackgroundImage";
import backround from 'assets/Main.jpg'
import styles from './style.module.scss'
import ArrowDown from "./ArrowDown";

const BigImg = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.textwrapper}>
            <h1 className={styles.header} >
                Hello, I'm Artyom
            </h1>
            <span className = {styles.text}>Frontend React developer</span>
            </div>
            <BackgroundImage
             src = {backround}
             width = '100%'
             />
        </div>
        
    )
}
export default BigImg;