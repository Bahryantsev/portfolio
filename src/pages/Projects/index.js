import React from "react";
import styles from './style.module.scss'
import Project from "./components/project";
import { Routes, Route, NavLink, Outlet} from 'react-router-dom'
import Descriptions from "./components/descriptions/components/DescriptionsItem";


const Projects = () => {
    const getClass = (state) =>{
        return styles.link + (state.isActive ? ` ${styles.active}`:'')
    }
    return (
        <div className={styles.wrapper}>
            <div className = {styles.folders}>
                <NavLink to='axit' className={getClass}>
                <Project
                    alt='Axit design website'
                    text='Axit'
                />
                </NavLink >
                <NavLink to='whales' className={getClass}>
                <Project
                    alt='Whales design website'
                    text='Whales'
                />
                </NavLink>
                <NavLink to='womanup' className={ getClass}>
                <Project
                    alt='womanup'
                    text='womanup'
                />
                </NavLink>
                <NavLink to = 'own' className={getClass}>
                <Project
                    alt= 'Personal site'
                    text = 'Personal website'
                />
                </NavLink>
            </div>
            <Outlet/>
        </div>

    )
}

export default Projects;