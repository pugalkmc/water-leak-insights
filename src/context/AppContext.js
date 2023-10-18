import React from 'react';
import { AppProvider } from './context/AppContext';
import App from './App';

function Main() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default Main;
