import React from 'react';

const Overview = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Water Usage Overview</div>
            <div className="card-body">
              <h5 className="card-title">Total Water Usage</h5>
              <p className="card-text">500 m³</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Leak Detection Overview</div>
            <div className="card-body">
              <h5 className="card-title">Total Leaks Detected</h5>
              <p className="card-text">10 leaks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
