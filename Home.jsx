import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Home.css";

const Home = () => {
  const fullText = "Clothing Matcher";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100); // Adjust speed here (100ms per letter)
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="home-container">
      <h1 className="main-title">{displayText}</h1>
      <p className="subtext">Your AI-powered outfit assistant</p>
      <div className="auth-links">
        <Link to="/login" className="auth-link">Login</Link>
        <Link to="/signup" className="auth-link">Signup</Link>
      </div>
    </div>
  );
};

export default Home;