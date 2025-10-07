import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!emaill || !password) { return setMsg('Email and password are required'); }

            try {
            await axios.post("/login", { email, password });

            localStorage.setItem("token", "dev-demo");;
            navigate("/dashboard");
        } catch (err) {
            setMsg(err.response?.data || "Login failed");
            }
        };

        return (
            <div style={{ maxWidth: 360, margin: "40px auto" }}>
                <h2>Log In</h2>
                <form onSubmit={handleLogin}>
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
                    <button type="submit">Log In</button>
                </form>

                <p style={{ marginTop: 10 }}>{msg}</p>
                <p style={{ marginTop: 6 }}>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>

            </div>
        )

}