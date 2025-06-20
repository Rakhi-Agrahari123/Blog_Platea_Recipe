import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // File select handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Upload handler
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      setMessage("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile); // backend expect 'image' key

    try {
      setUploading(true);
      setMessage("");

      // Change URL to your backend image upload endpoint
      const res = await axios.post("/api/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Image uploaded successfully!");
      console.log("Uploaded Image URL:", res.data.url); // or whatever backend returns

      // Clear form after upload
      setImageFile(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      setMessage("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload an Image</h2>

      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 w-full h-48 object-cover rounded"
          />
        )}

        <button
          type="submit"
          disabled={uploading}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {message && <p className="mt-2 text-center">{message}</p>}
    </div>
  );
};

export default ImageUpload;
