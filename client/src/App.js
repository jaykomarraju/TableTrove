import React from 'react';
import TestApi from './components/TestApi';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHome from './pages/AppHome';
import Upload from './pages/Upload';
import ErrorPage from './pages/ErrorPage';
import DataDetail from './pages/DataDetail';

function App() {
  return (
    // <div className="App">
    //   {/* <TestApi /> */}
    //   <Home />
    // </div>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppHome />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/data/:id" element={<DataDetail />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
