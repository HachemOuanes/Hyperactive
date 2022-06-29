import React, { useEffect, useState } from 'react';
import '../styles/App.css'
import StatusBar from './StatusBar';
import Main from './Main';
import NavBar from './NavBar';
import Loading from './Loading';


const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 9000)
  }, [])

  return (
    <div>
      <StatusBar />
      {(() => {
        if (loading) {
          return (
            <Loading />
          )
        }
        else {
          return (
            <div className='main'>
              <NavBar />
              <Main />
            </div>
          )
        }
      })()
      }
    </div>
  );
}

export default App;
