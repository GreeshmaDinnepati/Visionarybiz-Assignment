import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeshma from './Greeshma';
import Mobile1 from './Mobile1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeshma />} />
          <Route path="/Mobile1" element={<Mobile1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
