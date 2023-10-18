import React from 'react';

const Usage = () => {
  return (
    <div className="container">
      <h2 className="mt-4">Water Usage</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Daily Usage</div>
            <div className="card-body">
              <h5 className="card-title">Today's Water Usage</h5>
              <p className="card-text">50 m³</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Weekly Usage</div>
            <div className="card-body">
              <h5 className="card-title">This Week's Water Usage</h5>
              <p className="card-text">350 m³</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
