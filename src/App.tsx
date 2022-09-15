import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { CustomNavbar } from "./components/navbar";


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
