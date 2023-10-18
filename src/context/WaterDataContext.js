import React from 'react';
import { WaterDataProvider } from './context/WaterDataContext';
import App from './App';

function Main() {
  return (
    <WaterDataProvider>
      <App />
    </WaterDataProvider>
  );
}

export default Main;
