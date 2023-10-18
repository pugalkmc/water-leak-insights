import React from 'react';

const Features = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Key Features</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img
              src="feature-1-image-url"
              className="card-img-top"
              alt="Feature 1"
            />
            <div className="card-body">
              <h5 className="card-title">Real-time Monitoring</h5>
              <p className="card-text">
                Monitor water flow and usage in real-time.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="feature-2-image-url"
              className="card-img-top"
              alt="Feature 2"
            />
            <div className="card-body">
              <h5 className="card-title">Leak Detection</h5>
              <p className="card-text">
                Detect and address leaks promptly to conserve water.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="feature-3-image-url"
              className="card-img-top"
              alt="Feature 3"
            />
            <div className="card-body">
              <h5 className="card-title">Data Analysis</h5>
              <p className="card-text">
                Analyze water usage data to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
