import React, { useState } from 'react';
import '../styles/App.css'
import StatusBar from './StatusBar';
import Main from './Main';


const App: React.FC = () => {

  return (
    <div className='main'>
      <StatusBar />
      <Main />
    </div>
  );
}

export default App;
