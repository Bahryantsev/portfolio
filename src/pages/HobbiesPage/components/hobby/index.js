import React from "react";
import styles from './style.module.scss'


const Hobby = ({...props})=>{
    return(
        <div className = {styles.wrapper}>
            <h2 className = {styles.header}>{props.headertext}</h2>
            <p className = {styles.text}>{props.text}</p>
        </div>
    )
}

export default Hobby;