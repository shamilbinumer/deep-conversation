"use client";
import React, { useState } from 'react';

const AddBanner = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Convert file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle image file selection
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Validate file type
        if (!file.type.startsWith('image/')) {
          setMessage('Please select a valid image file');
          return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          setMessage('Image size should be less than 5MB');
          return;
        }

        const base64 = await convertToBase64(file);
        setImage(base64);
        setImagePreview(base64);
        setMessage('');
      } catch (error) {
        setMessage('Error processing image');
        console.error('Error converting image:', error);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    
    if (!title.trim()) {
      setMessage('Please enter a title');
      return;
    }

    if (!image) {
      setMessage('Please select an image');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/add-banner-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),
          image: image,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Banner added successfully!');
        // Reset form
        setTitle('');
        setImage('');
        setImagePreview('');
        // Reset file input
        const fileInput = document.getElementById('image-input');
        if (fileInput) fileInput.value = '';
      } else {
        setMessage(data.error || 'Failed to add banner');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      console.error('Error submitting banner:', error);
    } finally {
      setLoading(false);
    }
  };

  // Clear image selection
  const clearImage = () => {
    setImage('');
    setImagePreview('');
    const fileInput = document.getElementById('image-input');
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Banner</h2>
      
      <div className="space-y-4">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Banner Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter banner title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
        </div>

        {/* Image Input */}
        <div>
          <label htmlFor="image-input" className="block text-sm font-medium text-gray-700 mb-2">
            Banner Image
          </label>
          <input
            type="file"
            id="image-input"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
          <p className="text-xs text-gray-500 mt-1">
            Supported formats: JPG, PNG, GIF. Max size: 5MB
          </p>
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image Preview
            </label>
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-32 object-cover rounded-md border border-gray-300"
              />
              <button
                type="button"
                onClick={clearImage}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={loading}
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          } text-white`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Adding Banner...
            </span>
          ) : (
            'Add Banner'
          )}
        </button>

        {/* Message Display */}
        {message && (
          <div className={`p-3 rounded-md text-sm ${
            message.includes('successfully') 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {message}
          </div>
        )}
              </div>
    </div>
  );
};

export default AddBanner;