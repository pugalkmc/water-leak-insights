import React from 'react';

const ProfileInfo = () => {
  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value="JohnDoe123"
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value="john.doe@example.com"
              readOnly
            />
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="user-avatar.jpg"
            alt="User Avatar"
            className="img-thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
