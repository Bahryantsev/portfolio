import React, { useContext } from "react";
import styles from './style.module.scss';
import { NavLink } from "react-router-dom";

const MenuItem = ({...props})=>{
    return(
            <NavLink className = {styles.link}
            to = {props.to} >
               <li className = {styles.MenuItem}>{props.value}</li>
            </NavLink>
        
    )
}
export default MenuItem;