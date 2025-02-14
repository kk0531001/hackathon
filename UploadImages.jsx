import { useState } from "react";
import axios from "axios";
import "../styles.css";

function UploadImages() {
  const [images, setImages] = useState([]);
  const [result, setResult] = useState("");

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleAnalyze = async () => {
    if (images.length === 0) return alert("Upload at least one image!");

    try {
      const formData = new FormData();
      images.forEach((image) => formData.append("image", image));

      const response = await axios.post("http://localhost:5001/analyze", formData);
      setResult(response.data);
    } catch (error) {
      console.error("Error analyzing outfit:", error);
      setResult("Failed to analyze outfit.");
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Images</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <div className="image-preview">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={URL.createObjectURL(image)} alt="Preview" />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={handleAnalyze}>Analyze Outfit</button>
      <textarea value={result} readOnly />
    </div>
  );
}

export default UploadImages;