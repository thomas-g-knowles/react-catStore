import "./App.css";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import Header from "./component/Header";
import CatTile from "./component/CatTile";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  //STATES
  const [catData, setCatDate] = useState([""]);

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <Navbar />
      </nav>
      {/* HEADER */}
      <Header />
      {/* CAT TILE  */}
      <CatTile />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
