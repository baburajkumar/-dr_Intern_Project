import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavScrollExample from './components/Navbar';
import Topbar from './components/topbar';
import Fetchjsondata from './table';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <NavScrollExample/>
      <Fetchjsondata/>
    </div>
    
  );
}

export default App;
