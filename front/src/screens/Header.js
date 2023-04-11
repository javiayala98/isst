import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // archivo CSS para dar estilo al header

function Header(props) {
 const isAdmin = props.isAdmin;

  return (
    <div className="header">
      <div className="h-buttons">
          <Link to="/" className="client-button">
          <button className="client-button">Client</button>
          </Link>
        {isAdmin && 
                  <Link to="/manager" className="client-button">
                  <button className="manager-button">Manager</button>
                  </Link>}
      </div>
    </div>
  );
}

export default Header;