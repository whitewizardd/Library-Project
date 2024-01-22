import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage';
import Home from './Components/Home';
import Login from './Components/Login';
import Continue from "./Components/Continue";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path= "/continue" element={<Continue/>}/>
        </Routes>
    );
};

const AppRouter = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default AppRouter;
