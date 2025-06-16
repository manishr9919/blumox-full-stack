import React from "react";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { First } from "./pages/First";
import { Business } from "./pages/Business";
import { About_Us } from "./pages/About_Us";
import { Navbar } from "./components/Navbar";
import { Contact_Us } from "./pages/Contact_Us";
import { Login } from "./pages/Login";
import { Sign_Up } from "./pages/Sign_Up";

function App() {
  return (
    <>
      {/* <h1>This is Home page </h1> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/first" element={<First />} />
        <Route path="/business" element={<Business />} />

        <Route path="/about" element={<About_Us />} />

        <Route path="/contact" element={<Contact_Us />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Sign_Up />} />
      </Routes>
    </>
  );
}

export default App;
