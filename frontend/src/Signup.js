import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirm) { // if any of the fields are blank, it will prevent
            return setMsg("All fields are required");
        }
        if (password !== confirm) { // if the passwords do. not match, it will prevent
            return setMsg("Passwords do not match");
        }

    try {
        await axios.post("/signup", { username, email, password });
        setMsg("Signup successful");
        setTimeout(() => navigate("/login"), 800);
    } catch (err) {
        setMsg(err.response?.data || "Signup failed");
    }
};

return (
    <div style={{ maxWidth: 360, margin: "40px auto" }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e)=>setConfirm(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>

        <p>
            Already have an account? <Link to="/login">Log in</Link>
        </p>
    </div>
    );
}