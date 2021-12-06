import Home from './components/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Destination from './components/destination/Destination';
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";

function App() {
  const URL = "https://raw.githubusercontent.com/Fernando0654/FEM_1_Tip_Calculator/main/data_fem_13.json";

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  return (
    <div className="App">
    <BrowserRouter>
   
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
      <Route path="/destination" element={<Destination data={getData()} />} />
      </Routes>
      <Routes>
      <Route path="/crew" element={<Crew data={getData()}/>} />
      </Routes>
      <Routes>
      <Route path="/technology" element={<Technology data={getData()}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
