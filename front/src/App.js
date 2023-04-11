import './App.css';
import StartingPoint from './screens/StartingPoint'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManagerStartingPoint from './screens/ManagerStartingPoint'
import LockRegistry from './screens/LockRegistry';
import LocksEnumManagement from './screens/LocksEnumManagement';
import LockManagement from './screens/LockManagement';
import LocksEnumLogs from './screens/LocksEnumLogs';
import LockLogs from './screens/LockLogs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPoint />} />
        <Route path="/manager" element={<ManagerStartingPoint />} />
        <Route path="/register-lock" element={<LockRegistry/>} />
        <Route path='/lock-enum-management' element={<LocksEnumManagement/>}/>
        <Route path='lock-management' element={<LockManagement/>}/>
        <Route path='lock-enum-logs' element={<LocksEnumLogs/>}/>
        <Route path='lock-logs' element={<LockLogs/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;