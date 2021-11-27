import React from "react";
import styles from './style/style.module.scss'

import {Route, Routes} from 'react-router-dom'
import HomePage from "pages/HomePage";


export default class Content extends React.Component{
    render(){
        return(
            <div className={styles.content}>
            <Routes>
            
                    <Route path = '/' element={<HomePage/>} />
            
            </Routes>
            </div>
        )
    }
}