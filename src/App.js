// react setup
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Index from "./Components/Index/Index";

// App Component
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} exact element={<Index />} />
        <Route path={"/contact"} exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
