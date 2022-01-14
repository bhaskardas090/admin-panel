import './app.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="main">
        <Sidebar />
        <div className="pages"></div>
      </div>
    </div>
  );
}

export default App;
