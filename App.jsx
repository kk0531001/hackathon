import React, { useState } from "react";
import axios from "axios";
import "./App.css"; 
const App = () => {
    const [images, setImages] = useState([]);
    const [analysisResult, setAnalysisResult] = useState("");
    
    //image upload
    const handleUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => ({
            id: Date.now() + Math.random(), // Unique ID
            file: file,
            url: URL.createObjectURL(file),
            name: file.name
        }));
        setImages(prevImages => [...prevImages, ...newImages]);
    };

    //renaming images
    const renameImage = (id, newName) => {
        setImages(prevImages =>
            prevImages.map(img =>
                img.id === id ? { ...img, name: newName } : img
            )
        );
    };

    //deleting images
    const deleteImage = (id) => {
        setImages(prevImages => prevImages.filter(img => img.id !== id));
    };

    // Handle outfit analysis
    const analyzeOutfit = async () => {
        if (images.length === 0) {
            alert("Upload at least one image before analyzing.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/analyze", {
                imageUrl: images[0].url // Send the first image's URL for now
            });

            setAnalysisResult(response.data);
        } catch (error) {
            console.error("Error analyzing outfit:", error);
            setAnalysisResult("Failed to analyze outfit.");
        }
    };

    return (
        <div className="container">
            <h1>Outfit Analyzer</h1>
            <input type="file" multiple onChange={handleUpload} />
            <div className="image-gallery">
                {images.map(image => (
                    <div key={image.id} className="image-item">
                        <img src={image.url} alt="Uploaded Preview" />
                        <input
                            type="text"
                            value={image.name}
                            onChange={(e) => renameImage(image.id, e.target.value)}
                        />
                        <button onClick={() => deleteImage(image.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <button className="analyze-btn" onClick={analyzeOutfit}>
                Analyze Outfit
            </button>
            {analysisResult && <div className="result-box">{analysisResult}</div>}
        </div>
    );
};

export default App;