// react setup
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Index from "./Components/Index/Index";
import Todo from "./Components/Todo/Todo";
import Weather from "./Components/Weather/Weather";
import CrudApp from "./Components/CrudApp/CrudApp";
// App Component
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} exact element={<Index />} />
        <Route path={"/contact"} exact element={<Contact />} />
        <Route path={"/todo"} exact element={<Todo />} />
        <Route path={"/weather"} exact element={<Weather />} />
        <Route path={"/crud"} exact element={<CrudApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
