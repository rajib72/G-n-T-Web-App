import React from 'react';

const Dashboard = () => {
  const dashboardStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    margin: 0,
    padding: 0,
  };

  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const widgetContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  };

  const widgetStyle = {
    flexBasis: '30%',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={dashboardStyle}>
      <header style={headerStyle}>
        <h1>Dashboard</h1>
      </header>

      <div style={widgetContainerStyle}>
        <div style={widgetStyle}>
          <h2>Widget 1</h2>
          <p>This is the content of widget 1.</p>
        </div>

        <div style={widgetStyle}>
          <h2>Widget 2</h2>
          <p>This is the content of widget 2.</p>
        </div>

        <div style={widgetStyle}>
          <h2>Widget 3</h2>
          <p>This is the content of widget 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
