import React from 'react';
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from './HelloWorldApp';
import FirstApp from './FirstApp';
import './styles.css';
import CounterAppTarea from './CounterAppTarea';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Soy Goku" subTitle={123}/> */}
        {/* <FirstApp title="Soy Goku" subTitle={1000}/> */}
        <CounterAppTarea value={1000}/>
    </React.StrictMode>
)

