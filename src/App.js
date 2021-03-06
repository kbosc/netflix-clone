import { Routes, Route } from "react-router-dom"
import React from "react"
import './App.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Video from './pages/Video'
import UserPage from "./pages/UserPage";
import Search from "./pages/Search";

// console.log(process.env.REACT_APP_TMDB_API_KEY)

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/user' element={<UserPage />}/>
              <Route path='/search' element={<Search />}/>
              <Route path='/video/:id' element={<Video />}/>
              <Route path='*' element={<Home />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
