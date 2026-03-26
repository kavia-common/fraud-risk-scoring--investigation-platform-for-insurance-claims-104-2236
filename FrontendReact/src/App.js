import React, { useState, useEffect } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      {/* Header */}
      <header style={{
        padding: "16px",
        background: "#1976d2",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2>Fraud Risk Scoring Platform</h2>

        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>

      {/* Navigation */}
      <nav style={{
        padding: "10px",
        borderBottom: "1px solid #ccc",
        display: "flex",
        gap: "10px"
      }}>
        <button>Dashboard</button>
        <button>Claims</button>
        <button>Investigator Queue</button>
        <button>Rules</button>
        <button>Reports</button>
      </nav>

      {/* Main Content */}
      <main style={{ padding: "20px" }}>
        <h3>Welcome</h3>
        <p>Fraud Signal Detection & Investigation Platform</p>

        <div style={{ marginTop: "20px" }}>
          <h4>Core Modules</h4>
          <ul>
            <li>Claim Ingestion (CSV & Manual Entry)</li>
            <li>Rule-Based Fraud Scoring</li>
            <li>Investigator Queue & Assignment</li>
            <li>Relationship Network View</li>
            <li>Reporting Dashboard</li>
          </ul>
        </div>

        <p style={{ marginTop: "20px" }}>
          Current theme: <strong>{theme}</strong>
        </p>
      </main>
    </div>
  );
}

export default App;