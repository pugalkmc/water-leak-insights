import React from 'react';
import Banner from '../components/Home/Banner'; // Replace with the actual path to your Banner component
import Features from '../components/Home/Features'; // Replace with the actual path to your Features component
import Testimonials from '../components/Home/Testimonials'; // Replace with the actual path to your Testimonials component
import CallToAction from '../components/Home/CallToAction'; // Replace with the actual path to your CallToAction component

function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default Home;
