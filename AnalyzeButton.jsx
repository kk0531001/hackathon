console.log("AnalyzeButton rendered");
import { useState, useCallback } from "react";
import axios from "axios";

function AnalyzeButton({ image }) {
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);

    // Use useCallback to memoize the analyzeImage function
    const analyzeImage = useCallback(async () => {
        setError(null);
        try {
            const response = await axios.post("/api/categorize", { image });
            setTags(response.data.tags);
        } catch (err) {
            console.error("Error analyzing image:", err);
            setError(err.response?.data?.error || "Failed to analyze image.");
        }
    }, [image]); // Dependency array includes image

    return (
        <div>
            <button onClick={analyzeImage}>Analyze</button>
            {error && <p>{error}</p>}
            <ul>{tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
        </div>
    );
}

export default AnalyzeButton;