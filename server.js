import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5002;

app.use(express.json()); // Ensure JSON parsing is enabled

app.post("/api/categorize", async (req, res) => {
    try {
        const { image } = req.body;
        if (!image) return res.status(400).json({ error: "No image provided" });

        // Simulate response for now (replace with actual AI API call)
        res.json({ tags: ["shirt", "blue", "casual"] });
    } catch (error) {
        console.error("Error processing image:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));