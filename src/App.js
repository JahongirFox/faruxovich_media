import React from'react';
import Home from './Home/Home'
import { ContactUs } from './ContactUs/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
