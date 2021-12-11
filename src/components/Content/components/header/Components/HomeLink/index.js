import React from "react";
import styles from './style.module.scss'
import { NavLink } from "react-router-dom";

const HomeLink = ()=>{
return(
    <NavLink to='/' className= {styles.link}>Artyom Bahryantsev</NavLink>
)
}
export default HomeLink;