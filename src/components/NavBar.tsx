import { AppstoreAddOutlined, CarryOutOutlined, CodeSandboxOutlined, FireOutlined, HistoryOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li >
                    <div className="home-icon">
                        <CodeSandboxOutlined style={{ fontSize: '2rem', color: 'white' }} />
                    </div>
                </li>
                <li>
                    <div className="tasks-icon">
                        <AppstoreAddOutlined style={{ fontSize: '2rem', color: 'white' }} />
                    </div>
                </li>
                <li>
                    <div className="table-icon">
                        <CarryOutOutlined style={{ fontSize: '2rem', color: 'white' }} />
                    </div>
                </li>
                <li>
                    <div className="clock-icon">
                        <HistoryOutlined style={{ fontSize: '2rem', color: 'white' }} />
                    </div>
                </li>
                <li>
                    <div className="setting-icon">
                        <SettingOutlined style={{ fontSize: '2rem', color: 'white' }} />
                    </div>
                </li>
            </ul>
        </nav >
    );
}

export default NavBar;