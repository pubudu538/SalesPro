import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from "./src/landing/landing";
import Login from "./src/auth/pages/login";
import Home from "./src/admin/pages/home";
import Dashboard from "./src/admin/pages/dashboard";
import Users from "./src/admin/pages/users";

const App: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    )
};

export default App;