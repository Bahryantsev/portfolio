import React from "react";
import MenuItem from "./Components/MenuItem";
import styles from './style.module.scss';
import { NavLink } from 'react-router-dom'
import Hobbies from "pages/HobbiesPage";


const Menu = ()=>{

return(
    <ul className={styles.menu}>
        <MenuItem value = 'Projects' to = '/projects'/>
        <MenuItem value = 'Hobbies' to = '/hobby'/>
    </ul>

)
}
export default Menu;