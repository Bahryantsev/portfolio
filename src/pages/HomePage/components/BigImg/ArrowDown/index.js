import React from "react";
import BackgroundImage from "components/BackgroundImage";
import arrow from 'assets/arrowDown.svg'


const ArrowDown = ()=>{
    return(
            <BackgroundImage
            src = {arrow}
            height= '35px'
            />
    )
}

export default ArrowDown;