import API from "../api";
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"


function Login({ switchToRegister }) {
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