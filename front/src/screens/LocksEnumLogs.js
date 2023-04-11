import Header from './Header'
import LockLog from '../components/lockLog';
import './LocksEnumLogs.css'; // archivo CSS para dar estilo al Lock
import { Link } from 'react-router-dom';

function LocksEnumLogs() {
    const isAdmin = true;

    const locks = [
        {
          id: 1,
          name: "Lock 1",
          description: "Description for Lock 1"
        },
        {
          id: 2,
          name: "Lock 2",
          description: "Description for Lock 2"
        },
        {
          id: 3,
          name: "Lock 3",
          description: "Description for Lock 3"
        },
        {
          id: 4,
          name: "Lock 4",
          description: "Description for Lock 4"
        },
        {
          id: 5,
          name: "Lock 5",
          description: "Description for Lock 5"
        }
      ];

  

    return (
      <>
        <Header isAdmin={isAdmin} />
        <div className="lel-lock-container">
                    {locks.map((lock, index) => (
                      <LockLog name={lock.name} description={lock.description} id={lock.id}/>
          ))}
        </div>
        <Link to="/manager">
                <button className="back-button">
                    <i className="fa fa-arrow-left"></i> Volver
                </button>
        </Link>
    </>
    );
}

export default LocksEnumLogs;
                