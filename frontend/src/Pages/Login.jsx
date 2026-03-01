import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const role = username.toLowerCase() === "admin" ? "admin" : "student";

    localStorage.setItem("role", role);
    localStorage.setItem("username", username);

    navigate(role === "admin" ? "/admin" : "/student");
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>

        <input
          type="text"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}