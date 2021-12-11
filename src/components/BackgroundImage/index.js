import React from "react";


const BackgroundImage = ({...props})=>{
    return(
        <img
            src = {props.src}
            width = {props.width}
            height = {props.height}
            />
    )
}
export default BackgroundImage;