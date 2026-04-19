import API from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await API.post("/register", {
        name,
        email,
        password,
      });

      alert("Registered");
      navigate("/");
    } catch {
      alert("Error");
    }
  };

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <input onChange={(e) => setEmail(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;