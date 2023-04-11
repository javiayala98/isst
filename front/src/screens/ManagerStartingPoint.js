import React from 'react';
import './ManagerStartingPoint.css';
import Header from './Header';
import { Link } from 'react-router-dom';


function ManagerStartingPoint() {
  return (
    <div className="app-container">
      <Header isAdmin={true} />
      <div className="man-card-container">
        <div className="man-lock-card">
          <h2>Register New Lock</h2>
          <Link to="/register-lock" className="client-button">
          <button>Register</button>
          </Link>
        </div>
        <div className="man-lock-card">
          <h2>Manage Current Locks</h2>
          <Link to="/lock-enum-management" className="client-button">
          <button>Manage</button>
          </Link>
        </div>
        <div className="man-lock-card">
          <h2>Check Lock's Logs</h2>
          <Link to="/lock-enum-logs" className="client-button">
          <button>Check</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManagerStartingPoint;
