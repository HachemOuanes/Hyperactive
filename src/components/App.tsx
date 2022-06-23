import React, { useState } from 'react';
import '../styles/App.css'
import StatusBar from './StatusBar';


const App: React.FC = () => {

  return (
    <div className='main'>
      <StatusBar />
      <div className='main-app'>
        <h1>Boulhech Electron App</h1>
      </div>
    </div>
  );
}

export default App;
