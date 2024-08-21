import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardContent from './pages/DashboardContent';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: 20, marginTop: 50 }}>
        <h2>Welcome to the Dashboard</h2>
        <DashboardContent  />
      </div>
    </div>
  );
}

export default App;