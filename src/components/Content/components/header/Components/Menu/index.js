import React from "react";
import MenuItem from "./Components/MenuItem";
import styles from './style.module.scss';


const Menu = ()=>{

return(
    <ul className={styles.menu}>
        <MenuItem value = 'Projects'/>
        <MenuItem value = 'Hobbies'/>
    </ul>

)
}
export default Menu;