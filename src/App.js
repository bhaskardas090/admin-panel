import './app.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="main">
        <Sidebar />
        <div className="pages">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
