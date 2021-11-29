import Home from './components/home/Home';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import Destination from './components/destination/Destination';
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/technology";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Router>
      <Route path="/" element={<Home/>} />
      <Route path="/destination" element={<Destination/>} />
      <Route path="/crew" element={<Crew/>} />
      <Route path="/technology" element={<Technology/>} />
      </Router>
    </BrowserRouter>
    </div>
  );
}

export default App;
