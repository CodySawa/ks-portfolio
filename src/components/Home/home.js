import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';


import './home.css';

function Home() {
    return (
        <section id="home" className="stars-container">   
            <div className="homeTextDiv ">
                <p className="greeting">Hey, my name is</p>
                <h2>Kota Sawada</h2>
                <p className="selfExp">I build things for the web!</p>
                <a href="#about"><FontAwesomeIcon icon={faAnglesDown} className="downIcon"/></a>            
            </div>
        </section>
        
    )
}

export default Home;