import React from 'react';
import logo from './logo.svg';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import './assets/style/main.scss'
import { Home } from './cmps/Home';
import { Header } from './cmps/Header';
//  <div className="App"> </div> 

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes >
          <Route path="/" element={< Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
