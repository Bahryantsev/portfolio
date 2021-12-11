import React from "react";
import styles from './style/style.module.scss'

import { Route, Routes } from 'react-router-dom'
import HomePage from "pages/HomePage";
import Hobbies from "pages/HobbiesPage";
import Projects from "pages/Projects";
import Axit from "../../../../pages/Projects/components/descriptions/AXIT";
import Whales from "../../../../pages/Projects/components/descriptions/WHALES";
import Own from "../../../../pages/Projects/components/descriptions/OWN";




export default class Content extends React.Component {
    render() {
        return (
            <div className={styles.content}>
                <Routes>

                    <Route path='/' element={<HomePage />} />
                    <Route path='/hobby' element={<Hobbies />} />
                    <Route path='/projects' element={<Projects />}>
                        <Route path='axit' element={<Axit/>} />
                        <Route path='whales' element={<Whales/>} />
                        <Route path = 'own' element = {<Own/>}/>
                    </Route>
                </Routes>
            </div>
        )
    }
}