import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from './Components/AuthContext'; // Correct custom hook import
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setLogin } = useAuth(); // Correctly using custom useAuth hook

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    localStorage.setItem("isLogin", JSON.stringify(true));
    setLogin(true); // Update login state

    alert("Login successful!");
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register Here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;