import { useState } from "react";
import AnalyzeButton from "../Components/AnalyzeButton";

function UploadImages() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div>
            <h2>Upload an Image</h2>
            <input type="file" accept="image/*" onChange={handleImageUpload} />

            {/* Pass selectedImage to the AnalyzeButton component */}
            <AnalyzeButton image={selectedImage} />
        </div>
    );
}

export default UploadImages;