import React from 'react';
import './LockMan.css'; // archivo CSS para dar estilo al Lock
import { Link } from 'react-router-dom';

function LockMan(props) {

  const name = props.name;
  const description = props.description;

  return (
    <div className="lm-lock-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={"/Lock-management"}>
      <button>Manage</button>
      </Link>
    </div>
  );
}

export default LockMan;