// VerificationPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Continue = () => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleCodeChange = (e) => {
        // Validate and set the verification code
        const inputCode = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setVerificationCode(inputCode.slice(0, 4)); // Limit to four digits
    };

    return (
        <div className="verification-container">
            <h2>Enter the code sent to your email for verification</h2>
            <div className="code-input-container">
                <input
                    type="text"
                    value={verificationCode}
                    onChange={handleCodeChange}
                    maxLength="4"
                />
            </div>
            <div className="submit-container">
                <Link to="/success-page">
                    <button className="continue-button">Continue</button>
                </Link>
            </div>
        </div>
    );
};

export default Continue;
