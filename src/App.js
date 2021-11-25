import logo from './logo.svg';
import './App.css';
import {Button, Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">    
          <Dashboard/>
      </header>
    </div>
  );
}

export default App;
