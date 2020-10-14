import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../images/logo.svg';

import '../styles/pages/landing.scss';

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="happy"/>

                <main>
                    <h1>Turn the world a happier place</h1>
                    <p>Visit an orphanage and change many children's day</p>
                </main>

                <div className="location">
                    <strong>Campo Grande</strong>
                    <span>Mato Grosso do Sul</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </Link>
            </div>   
        </div>
    );
}

export default Landing;