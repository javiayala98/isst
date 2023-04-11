import React, { useState } from 'react';
import './LockLogs.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function LockLogs() {
  const [logs, setLogs] = useState([
    { id: 1, uuid: 'uuid1', date: '2022-01-01', result: true },
    { id: 2, uuid: 'uuid2', date: '2022-01-02', result: false },
    { id: 3, uuid: 'uuid3', date: '2022-01-03', result: true },
    { id: 4, uuid: 'uuid4', date: '2022-01-04', result: false },
    { id: 5, uuid: 'uuid5', date: '2022-01-05', result: true },
    { id: 6, uuid: 'uuid6', date: '2022-01-06', result: false },
    { id: 7, uuid: 'uuid7', date: '2022-01-07', result: true },
    { id: 8, uuid: 'uuid8', date: '2022-01-08', result: false },
    { id: 9, uuid: 'uuid9', date: '2022-01-09', result: true },
    { id: 10, uuid: 'uuid10', date: '2022-01-10', result: false },
    { id: 11, uuid: 'uuid10', date: '2022-01-10', result: false },
  ]);

  const [selectedLog, setSelectedLog] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const handleClick = (log) => {
    setSelectedLog(log);
  };

  const handleNext = () => {
    setStartIndex(startIndex + 5);
  };

  const handlePrevious = () => {
    setStartIndex(startIndex - 5);
  };

  return (
    <div>
      <Header isAdmin={true} />
      <div className="ll-container">
        <h1>Lock's Nickname Log</h1>
        <div className="ll-logs-container">
          <div className="ll-logs-card">
            {logs.slice(startIndex, startIndex + 5).map((log) => (
              <button
                key={log.id}
                className="ll-log-button"
                onClick={() => handleClick(log)}
              >
                LOG {log.id}
              </button>
            ))}
            <div className='nav-buttons'>
            {startIndex !== 0 && (
              <button className="ll-nav-button" onClick={handlePrevious}>
                Previous 5
              </button>
            )}
            {startIndex + 5 < logs.length && (
              <button className="ll-nav-button" onClick={handleNext}>
                Next 5
              </button>
            )}
            </div>
          </div>
          <div className="ll-log-details-card">
            {selectedLog ? (
              <>
                <h2>Log {selectedLog.id}</h2>
                <p>UUID Usuario: {selectedLog.uuid}</p>
                <p>Fecha de intento: {selectedLog.date}</p>
                <p>
                  Resultado del log: {selectedLog.result ? 'Success' : 'Failure'}
                </p>
              </>
            ) : (
              <p>Please select a log from the list</p>
            )}
          </div>
        </div>
      </div>
      <Link to="/lock-enum-logs">
                <button className="back-button">
                    <i className="fa fa-arrow-left"></i> Volver
                </button>
      </Link>
    </div>
  );
}

export default LockLogs;
