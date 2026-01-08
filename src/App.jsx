import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/catalogue" element={<h1>Catalogue</h1>} />
        <Route path="/testimonials" element={<h1>Testimonials</h1>} />
        <Route path="/contacts" element={<h1>Contact Us</h1>} />
      </Routes>
    </>
  );
}
export default App;
