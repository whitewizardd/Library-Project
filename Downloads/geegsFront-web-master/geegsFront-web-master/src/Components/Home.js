// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="welcome-container">
            <header>
                <h1>Welcome to Event Booking</h1>
            </header>
            <p>
                We're excited to have you! If you're ready to start booking events, click the button below.
            </p>
            <Link to="/home" className="continue-button">
                Start Booking
            </Link>
        </div>
    );
};

export default HomePage;
