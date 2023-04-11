import React from 'react';
import './LockManagement.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function LockManagement() {
return (
<div>
    <Header isAdmin={true} />
    <div className="lock-registry-container">
        <h1>Lock's Nickname Management</h1>
            <div className="lm-lock-card">
                <h2>Client Username</h2>
                    <input type="text" placeholder="E.g. Daniel_Hernandez_1245" />
                    <h2>Date and hour of check in</h2>
                    <input type="text" placeholder="dd/mm/aa" />
                    <h2>Date and hour of check out</h2>
                    <input type="text" placeholder="dd/mm/aa" />
                <button className="grant-access-button">Grant Access</button>
            </div>
            <Link to="/lock-enum-management">
                <button className="back-button">
                    <i className="fa fa-arrow-left"></i> Volver
                </button>
            </Link>
         </div>
</div>
);
}

export default LockManagement;