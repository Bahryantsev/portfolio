import React from "react";
import Hobby from "./components/hobby";
import styles from './style.module.scss'
import BackgroundImage from "../../components/BackgroundImage";
import asya from '../../assets/asya.png'


const Hobbies = () => {
    return (
        <div className= {styles.wrapper}>
            <div className={styles.container}>
                <Hobby
                    headertext='Coffee'
                    text='Things happened this way that i worked on a coffee roasting company for last 3 years. By the way, main page background photo was made there. And it made huge contibution into my daily routine. Tasty coffee is my morning ritual. I cant even imagine my day without it.Nowadays I have a small part in coffee company called `Concord Coffe` and made by my friend.'
                />
                <Hobby
                    headertext='Chess'
                    text='Sometimes I think that my brain needs a warm up and open some chess sites and play some blitz online tourtaments. Chess make me feel calm but to feel alive. '
                />
                <Hobby
                    headertext='Also... '
                    text='I am a happy father of a dog. Yep, I have a dog. Her name is Asya. Just look at her ;D'
                />
            </div>
            <div className={styles.asya}>

            </div>
        </div>

    )
}

export default Hobbies;