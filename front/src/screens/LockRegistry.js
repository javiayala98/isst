import React from 'react';
import './LockRegistry.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function LockRegistry() {
  return (
    <div>
      <Header isAdmin={true} />
      <div className="lock-registry-container">
        <h1>Lock Registration</h1>
        <div className="lel-lock-card">
          <h2>Lock's fabric UUID</h2>
          <input type="text" placeholder="E.g. khsdfhwer4234fd" />
          <div className="lock-info">
            <p>Where do I find it</p>
            <button className="info-button">
              i
              <i className="fa fa-info"></i>
            </button>
          </div>
          <h2>Lock's Nickname</h2>
          <input type="text" placeholder="E.g. Beach falt, CP" />
          <h2>Accommodation's Name</h2>
          <input type="text" placeholder="E.g. Hotel California" />
          <button className="register-button">REGISTER</button>
        </div>
        <Link to="/manager">
          <button className="back-button">
            <i className="fa fa-arrow-left"></i> Volver
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LockRegistry;
