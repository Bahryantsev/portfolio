import React, { useEffect, useState } from "react";
import styles from'./header.module.scss'
import Menu from "./Components/menu";
import HomeLink from "./Components/HomeLink";




const Header = ()=>{
    // const [opacity, setHeader] = useState(0);

    // const listenScrollEvent = event => {
    //     let newOpacity = 0
    //         while(window.scrollY>0){
    //         newOpacity = newOpacity +0.1
    //         console.log(newOpacity)
    //         return setHeader(newOpacity);
    //     }
    // };
  
    // useEffect(() => {
    //   window.addEventListener("scroll", listenScrollEvent);
  
    //   return () => window.removeEventListener("scroll", listenScrollEvent);
    // }, []);
    return(
        <div className = {styles.header}  >
            <HomeLink/>
            <Menu/>
        </div>
    )
}
export default  Header;