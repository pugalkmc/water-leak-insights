import React from 'react';
// import Sidebar from '../components/Sidebar'; // Replace with the actual path to your Sidebar component
import Overview from '../components/dashboard/Overview'; // Replace with the actual path to your Overview component
import Alerts from '../components/dashboard/Alerts'; // Replace with the actual path to your Alerts component
import Charts from '../components/dashboard/Charts'; // Replace with the actual path to your Charts component
import Usage from '../components/dashboard/Usage'; // Replace with the actual path to your Usage component

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* <Sidebar /> */}
      <div className="dashboard-content">
        <Overview />
        <Alerts />
        {/* <Charts /> */}
        <Usage />
      </div>
    </div>
  );
}

export default Dashboard;
