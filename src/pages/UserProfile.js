import React from 'react';
import AvatarUpload from '../components/userprofile/AvatarUpload'; // Replace with the actual path to your AvatarUpload component
import ProfileInfo from '../components/userprofile/ProfileInfo'; // Replace with the actual path to your ProfileInfo component
import ProfileSettings from '../components/userprofile/ProfileSettings'; // Replace with the actual path to your ProfileSettings component

function UserProfile() {
  return (
    <div>
      <h1>User Profile</h1>
      <div className="row">
        <div className="col-md-4">
          <AvatarUpload />
        </div>
        <div className="col-md-8">
          <ProfileInfo />
          {/* <ProfileSettings /> */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
