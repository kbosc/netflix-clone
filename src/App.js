import { Routes, Route } from "react-router-dom"
import React from "react"
import './App.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/video/:id' element={<Video />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
