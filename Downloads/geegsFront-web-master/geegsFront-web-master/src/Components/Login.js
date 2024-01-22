// Login.js
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        // You can add authentication logic here (e.g., API call, validation)
        // For simplicity, I'm checking if both email and password are not empty
        if (email && password) {
            setLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <div className="login-container">
            {isLoggedIn ? (
                <div>
                    <h2>Welcome, User!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};

export default Login;
