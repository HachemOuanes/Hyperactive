import React, { useState } from 'react';
import '../styles/Loading.css';

const Loading: React.FC = () => {

    return (
        <div className="main-app" >
            <div className="loader">
                <div className="box box0">
                    <div></div>
                </div>
                <div className="box box1">
                    <div></div>
                </div>
                <div className="box box2">
                    <div></div>
                </div>
                <div className="box box3">
                    <div></div>
                </div>
                <div className="box box4">
                    <div></div>
                </div>
                <div className="box box5">
                    <div></div>
                </div>
                <div className="box box6">
                    <div></div>
                </div>
                <div className="box box7">
                    <div></div>
                </div>
                <div className="ground">
                    <div></div>
                </div>
            </div>
            <div className='progress-bar'></div>
            <small>Hyperactive™ Powered by Hachem Ouanes</small>
        </div>
    );
}

export default Loading;