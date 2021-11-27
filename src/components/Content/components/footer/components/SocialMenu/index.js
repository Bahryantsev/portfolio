import React from "react";
import SocialMenuItem from "./components/SocialMenuItem";
import git from 'assets/git.svg'
import instagram from 'assets/instagram.svg'
import linkedin from 'assets/linkedin.svg'

const SocialMenu = ()=>{
 return(
     <div>
        <SocialMenuItem src = {git} height ='35px' width = '35px' href = 'https://github.com/Bahryantsev'/>
        <SocialMenuItem src = {linkedin} height ='35px' width = '35px' href = 'https://www.linkedin.com/in/artyom-bahryantsev-603644225'/>
        <SocialMenuItem src = {instagram} height ='35px' width = '35px' href = 'https://www.instagram.com/bahryantsev/'/>
     </div>
 )
}
export default SocialMenu;