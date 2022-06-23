import React, { useState } from 'react';
import '../styles/StatusBar.css';

const StatusBar: React.FC = () => {

    return (
        <div className='bar'>
            <button className="bar-button close" onClick={() => { }}></button>
            <button className="bar-button fullscreen"></button>
            <button className="bar-button minimize"></button>
            <div className='drag'> </div>
        </div>
    );
}

export default StatusBar;
