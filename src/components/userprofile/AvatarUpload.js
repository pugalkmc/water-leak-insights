import React, { useState } from 'react';

const AvatarUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Change Avatar</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected Avatar"
              className="img-thumbnail"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AvatarUpload;
