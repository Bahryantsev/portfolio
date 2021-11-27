import React, { useContext } from "react";
import styles from './style.module.scss';

const MenuItem = ({...props})=>{
    return(
        <li className = {styles.MenuItem}><a className = {styles.link}>{props.value}</a></li>
    )
}
export default MenuItem;