import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/articles" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
