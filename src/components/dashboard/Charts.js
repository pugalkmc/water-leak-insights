import React from 'react';
import { Bar } from 'react-chartjs-2';

const Charts = () => {
  // Sample data for the chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Water Usage (m³)',
        data: [50, 60, 70, 55, 75],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Water Usage Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Charts;
