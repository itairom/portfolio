// import { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import './assets/style/main.scss'
import { Home } from './cmps/Home';

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={<span className="loader"></span>} > */}
        <BrowserRouter>
          <Routes >
            <Route path="/" element={< Home />} />
          </Routes>
        </BrowserRouter>
      {/* </Suspense> */}
    </div>
  )
}

export default App;
