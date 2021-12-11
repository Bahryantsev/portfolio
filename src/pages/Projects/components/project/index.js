import React from "react";
import BackgroundImage from 'components/BackgroundImage'
import folder from 'assets/folder.png'
import styles from './style.module.scss'


const Project = ({...props})=>{
    return(
        
        <div className={styles.wrapper}>
            <BackgroundImage
            src = {folder}
            width = '80px'
            height = '80px'
            />
            <h2>{props.text}</h2>
            
        </div>
    )
}

export default Project;