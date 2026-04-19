import API from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", {
        email: email.trim(),
        password: password.trim(),
      });

      console.log(res.data);

      const { token, user } = res.data;
      localStorage.setItem("token", token);

      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/student/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="login-btn">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;