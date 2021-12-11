import React from "react";
import styles from './style.module.scss'
import Project from "./components/project";
import { Routes, Route, NavLink, Outlet} from 'react-router-dom'
import Descriptions from "./components/descriptions/components/DescriptionsItem";


const Projects = () => {
    return (
        <div className={styles.wrapper}>
            <div className = {styles.folders}>
                <NavLink to='axit' className={styles.link}>
                <Project
                    alt='Axit design website'
                    text='Axit'
                />
                </NavLink >
                <NavLink to='whales' className={styles.link}>
                <Project
                    alt='Whales design website'
                    text='Whales'
                />
                </NavLink>
                <NavLink to = 'own' className={styles.link}>
                <Project
                    alt='My own website'
                    text = 'My own website'
                />
                </NavLink>
            </div>
            <Outlet/>
        </div>

    )
}

export default Projects;