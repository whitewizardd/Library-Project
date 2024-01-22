
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import logo from '../Asserts/GeegStar.jpg';

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <header>
                <img src="" alt="Logo" className="logo" />
                <Link to="/home" className="header-button">
                    Home
                </Link>
                <Link to="/login" className="header-button2">
                    Login
                </Link>
            </header>
            <h2>Create New Account</h2>
            <div className="input-container">
                <label htmlFor="email">Enter Email:</label>
                <input type="email" id="email" placeholder="Your email address" />
                <p className="message">We'll send a confirmation to this email address.</p>
            </div>
            <div className="role-container">
                <label htmlFor="role">Select Your Role:</label>
                <select id="role">
                    <option value="planner">Planner</option>
                    <option value="talent">Talent</option>
                </select>
            </div>
            <div className="buttons-container">
                <button className="role-button">Submit</button>
            </div>
            <div className="space-down"></div>
            <div className="already-member?">
                <p>
                    Already a member? <Link to="/login">Login</Link>
                </p>
                <Link to="/continue">
                    <button className="continue-button">Continue</button>
                </Link>
            </div>
        </div>
    );
};

export default WelcomePage;
