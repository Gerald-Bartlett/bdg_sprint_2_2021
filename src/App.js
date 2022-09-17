import React from "react";
import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Home";
import NewEntry from "./NewEntry";
import DisplayContents from "./DisplayContents";
import Login from "./Login";
import Navigation from "./Navigation";
import Footer from "./Footer";
export default function App(){ 
  return (
    <Router>
      <div className="App">
      <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/NewEntry" element={<NewEntry />} />
      <Route path="/DisplayContents" element={<DisplayContents />} />
    </Routes>
    <Footer />
      </div>
    </Router>
 
  )};