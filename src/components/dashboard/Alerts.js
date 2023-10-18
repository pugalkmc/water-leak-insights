import React, { useState } from 'react';

const Alerts = () => {
  // State to manage the list of alerts
  const [alerts, setAlerts] = useState([]);

  // Function to add an alert
  const addAlert = (message, type) => {
    const newAlert = { message, type };
    setAlerts([...alerts, newAlert]);
  };

  // Function to remove an alert
  const removeAlert = (index) => {
    const updatedAlerts = [...alerts];
    updatedAlerts.splice(index, 1);
    setAlerts(updatedAlerts);
  };

  return (
    <div>
      {alerts.map((alert, index) => (
        <div key={index} className={`alert ${alert.type}`}>
          {alert.message}
          <button onClick={() => removeAlert(index)}>Close</button>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
