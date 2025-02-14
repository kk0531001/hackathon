import "../styles/ImagePreview.css";

function ImagePreview({ image, onRemove }) {
    return (
        <div className="image-preview">
            <img src={URL.createObjectURL(image)} alt="Uploaded Preview" />
            <button onClick={onRemove}>Delete</button>
        </div>
    );
}

export default ImagePreview;