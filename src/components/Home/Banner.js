import React from 'react';

const Banner = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to Water Management Dashboard</h1>
        <p className="lead">
          Monitor, analyze, and manage water resources with ease.
        </p>
        <hr className="my-4" />
        <p>
          Keep track of water usage, detect leaks, and make informed decisions.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Banner;
