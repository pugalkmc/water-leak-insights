import React from 'react';

const CallToAction = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Ready to Manage Your Water Resources?</h2>
          <p>
            Get started today and take control of water usage and distribution.
          </p>
          <a className="btn btn-primary" href="#" role="button">
            Get Started
          </a>
        </div>
        <div className="col-md-6">
          <img
            src="your-image-url-here"
            alt="Water Management"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
