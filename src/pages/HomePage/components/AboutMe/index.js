import React from "react";
import styles from './style.module.scss'


const AboutMe = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className= {styles.header}> About me</h2>
            <p className = {styles.lorem}>
                Once I decided to make my own website with some media content like music, movies, wallpapers and some apps. This decision I made when I was 13-14 years old. This kind of websites was popular that time in Belarus.
            </p>
            <p className = {styles.lorem}>
                Nowadays I just want to bring more logic into my life. That is why started learning programming. Next I got a dilemma which way and language to choose. I remembered my teen goal and made a choice to became a frontend developer.
            </p>
            <p className = {styles.lorem}> 
                I do my best to offer the most effective solutions, through paying attention to  details. My priority is creating the most functional, fast-working and ofcourse beautiful apps, that will be usefull to everyone. Check out my portfolio to see of my projects</p>
            
            <p className = {styles.lorem}>
                Besides work and study, I enjoy cycling. This is my way to relax and reset my thinking. Aside from recreation, the bicycle is my daily transport. This is how I try to combine pleasure and benefit to my body.
                Except of bikes I'm passionated with coffee and bar culture. Lots of time I worked as barman and barista and I'm still excited of serving drinks, but nowadays it's just a hobby for me.
            </p>
        </div>
    )
}
export default AboutMe;