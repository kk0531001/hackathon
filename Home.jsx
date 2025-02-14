import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Clothing Matcher";
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed here
  }, []);

  return (
    <div className="home-container">
      {/* Top Right - Login/Signup */}
      <div className="auth-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>

      {/* Centered Content */}
      <div className="content">
        <h1>{text}</h1>
        <p>Clothing Matcher</p>
      </div>
    </div>
  );
};

export default Home;