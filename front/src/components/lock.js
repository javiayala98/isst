import React from 'react';
import './lock.css'; // archivo CSS para dar estilo al Lock

function Lock(props) {

  const name = props.name;
  const description = props.description;

  return (
    <div className="l-lock-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <button>Unlock</button>
    </div>
  );
}

export default Lock;