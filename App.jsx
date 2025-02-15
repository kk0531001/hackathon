import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";  
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import UploadImages from "./Pages/UploadImages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* ✅ Make sure this exists */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/uploadimages" element={<UploadImages />} />
      </Routes>
    </Router>
  );
}

export default App;