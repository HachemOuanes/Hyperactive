import React, { useState } from 'react';
import '../styles/Main.css';
import space from '../assets/space.gif'

const Main: React.FC = () => {

    return (
        <div className='main-app'>
            <div className='side-container'>
                <h1>Welcome Back, Hachem</h1>
                <button className="glitch_button">START</button>
            </div>
            <img src={space}></img>
        </div>
    );
}

export default Main;
