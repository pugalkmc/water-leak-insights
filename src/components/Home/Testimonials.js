import React from 'react';

const Testimonials = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">What Our Users Say</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                "This water management system has helped us save water and
                money. Highly recommended!"
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">- John D.</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                "Our water distribution efficiency has improved significantly
                since using this platform."
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">- Sarah H.</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                "We love the data analysis tools that help us make data-driven
                decisions."
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">- Michael S.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
