import axios from "axios";
import "../styles/AnalyzeButton.css";

function AnalyzeButton({ images, setAnalysisResult }) {
    const analyzeOutfit = async () => {
        if (images.length === 0) {
            alert("Upload at least one image!");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("imageUrl", URL.createObjectURL(images[0])); // Only sending first image for now

            const response = await axios.post("http://localhost:5001/analyze", formData);
            setAnalysisResult(response.data.result || "Analysis failed.");
        } catch (error) {
            console.error("Analysis Error:", error);
            setAnalysisResult("Error analyzing the outfit.");
        }
    };

    return <button onClick={analyzeOutfit} className="analyze-button">Analyze Outfit</button>;
}

export default AnalyzeButton;