import React from 'react';
import './lockLog.css'; // archivo CSS para dar estilo al Lock
import { Link } from 'react-router-dom';

function LockLog(props) {

  const name = props.name;
  const description = props.description;

  return (
    <div className="ll-lock-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={"/lock-logs"}>
      <button>Access Log</button>
      </Link>
    </div>
  );
}

export default LockLog;