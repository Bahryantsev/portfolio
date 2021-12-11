import React from "react";
import { Link } from "react-router-dom";
import styles from './style.module.scss'


const Descriptions = ({ ...props }) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.header}>{props.header}</h2>
            <p className={styles.text}>{props.text}  <p><a href={props.href}>go to site</a></p></p>
            <Link to='/projects' className={styles.link}/>
        </div>
    )
}

export default Descriptions;