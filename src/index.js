
import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App';
import './styles/default.scss'
import { BrowserRouter } from 'react-router-dom'


const element = document.querySelector('#root');
ReactDom.render(<BrowserRouter>
    <App />
</BrowserRouter>, element);




