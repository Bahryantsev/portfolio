import React from "react";
// import styles from './style.module.scss'

const BackgroundImage = ({...props})=>{
    return(
            <img
            src= {props.src}
            style = {{width: props.width, height: props.height, filter: props.filter}}
            />
    )
}
export default BackgroundImage;