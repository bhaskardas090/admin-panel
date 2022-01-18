import './app.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="main">
        <Sidebar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
