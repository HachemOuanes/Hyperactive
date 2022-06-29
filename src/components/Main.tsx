import React, { useEffect, useRef, useState } from 'react';
import '../styles/Main.css';
import space from '../assets/space.gif'
import quotesGenerator from '../services/Quotes';


const Main: React.FC = () => {
    const [quote, setQuote] = useState("")

    useEffect(() => {
        quotesGenerator()
            .then(result => {
                setQuote(result);
                console.log(result);
            })
    }, [])

    return (
        <div className='main-app'>
            <div className='side-container'>
                <>
                    <h1>Welcome Back, Hachem</h1>
                    <button className="glitch_button">START</button>
                </>
            </div>
            <img src={space}></img>
        </div >
    );
}

export default Main;
