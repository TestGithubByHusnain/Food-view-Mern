import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/create-food.css";

const CreateFood = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState("");
  const [fileError, setFileError] = useState("");

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Utility to validate video type
  const isValidVideoFile = (file) => file?.type.startsWith("video/");

  useEffect(() => {
    if (!videoFile) {
      setVideoURL("");
      return;
    }

    const url = URL.createObjectURL(videoFile);
    setVideoURL(url);

    return () => URL.revokeObjectURL(url);
  }, [videoFile]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return clearFile();

    if (!isValidVideoFile(file)) {
      setFileError("Please select a valid video file.");
      return;
    }

    setFileError("");
    setVideoFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files?.[0];

    if (!file || !isValidVideoFile(file)) {
      setFileError("Please drop a valid video file.");
      return;
    }

    setFileError("");
    setVideoFile(file);
  };

  const clearFile = () => {
    setVideoFile(null);
    setFileError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("video", videoFile);

    try {
      const response = await axios.post("http://localhost:3000/api/food", formData, {
        withCredentials: true,
      });

      console.log("✅ Food created:", response.data);
      navigate("/");

    } catch (error) {
      console.error("❌ Error creating food:", error);
      alert("Failed to create food. Please try again.");
    }
  };

  const isSubmitDisabled = !name.trim() || !videoFile;

  const openFileDialog = () => fileInputRef.current?.click();

  return (
    <div className="create-food-page">
      <div className="create-food-card">
        <header className="create-food-header">
          <h1 className="create-food-title">Create Food</h1>
          <p className="create-food-subtitle">
            Upload a short video, give it a name, and add a description.
          </p>
        </header>

        <form className="create-food-form" onSubmit={handleSubmit}>
          {/* Video Upload Section */}
          <div className="field-group">
            <label htmlFor="foodVideo">Food Video</label>

            <input
              ref={fileInputRef}
              id="foodVideo"
              type="file"
              accept="video/*"
              className="file-input-hidden"
              onChange={handleFileChange}
            />

            <div
              className="file-dropzone"
              role="button"
              tabIndex={0}
              onClick={openFileDialog}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onKeyDown={(e) => {
                if (["Enter", " "].includes(e.key)) {
                  e.preventDefault();
                  openFileDialog();
                }
              }}
            >
              <div className="file-dropzone-inner">
                <svg
                  className="file-icon"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10.8 3.2a1 1 0 0 1 .4-.08h1.6a1 1 0 0 1 1 1v1.6h1.6a1 1 0 0 1 1 1v1.6h1.6a1 1 0 0 1 1 1v7.2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6.4a1 1 0 0 1 1-1h1.6V3.2a1 1 0 0 1 1-1h1.6a1 1 0 0 1 .6.2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 12.75v-1.5c0-.62.67-1 1.2-.68l4.24 2.45c.53.3.53 1.05 0 1.35L10.2 16.82c-.53.31-1.2-.06-1.2-.68v-1.5"
                    fill="currentColor"
                  />
                </svg>
                <div className="file-dropzone-text">
                  <strong>Tap to upload</strong> or drag and drop
                </div>
                <div className="file-hint">MP4, WebM, MOV • Up to ~100MB</div>
              </div>
            </div>

            {fileError && (
              <p className="error-text" role="alert">
                {fileError}
              </p>
            )}

            {videoFile && (
              <div className="file-chip" aria-live="polite">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12.75v-1.5c0-.62.67-1 1.2-.68l4.24 2.45c.53.3.53 1.05 0 1.35L10.2 16.82c-.53.31-1.2-.06-1.2-.68v-1.5" />
                </svg>
                <span className="file-chip-name">{videoFile.name}</span>
                <span className="file-chip-size">
                  {(videoFile.size / 1024 / 1024).toFixed(1)} MB
                </span>
                <div className="file-chip-actions">
                  <button type="button" className="btn-ghost" onClick={openFileDialog}>
                    Change
                  </button>
                  <button type="button" className="btn-ghost danger" onClick={clearFile}>
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Video Preview */}
          {videoURL && (
            <div className="video-preview">
              <video
                className="video-preview-el"
                src={videoURL}
                controls
                playsInline
                preload="metadata"
              />
            </div>
          )}

          {/* Name Field */}
          <div className="field-group">
            <label htmlFor="foodName">Name</label>
            <input
              id="foodName"
              type="text"
              placeholder="e.g., Spicy Paneer Wrap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Description Field */}
          <div className="field-group">
            <label htmlFor="foodDesc">Description</label>
            <textarea
              id="foodDesc"
              rows={4}
              placeholder="Write a short description: ingredients, taste, spice level, etc."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button className="btn-primary" type="submit" disabled={isSubmitDisabled}>
              Save Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFood;
