import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // clears session
        navigate("/"); // takes back to login page
    };

    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;