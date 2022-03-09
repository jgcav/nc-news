import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Articles from './components/Articles';
import Topics from './components/Topics'
import TopicPage from './components/TopicPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/articles" element={<Articles />} />
          <Route path = "/topics" element={<Topics />} />
          <Route path = "/articles/:topic" element={<TopicPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
