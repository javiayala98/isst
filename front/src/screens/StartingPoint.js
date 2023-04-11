import Header from './Header'
import Lock from '../components/lock';
import './StartingPoint.css'; // archivo CSS para dar estilo al Lock

function StartingPoint() {
    const isAdmin = true
    ;

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
        <div className="sp-lock-container">
                    {locks.map((lock, index) => (
                      <Lock name={lock.name} description={lock.description}/>
          ))}
        </div>
    </>
    );
  }
  export default StartingPoint;