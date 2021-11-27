import React from "react";
import styles from './style.module.scss'

const SocialMenuItem = ({...props})=>{
    return(
        <a href = {props.href} className = {styles.item}>
            <img
            src= {props.src}
            style = {{width: props.width, height:props.height}}
            />
        </a>
    )
}
export default SocialMenuItem;