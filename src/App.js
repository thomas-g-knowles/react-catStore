import "./App.css";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import Header from "./component/Header";
import CatTile from "./component/CatTile";
import React, { useState, useEffect } from "react";
import Basket from "./component/Basket";
import faker from "faker";

const App = () => {
  //STATES

  const [catData, setCatData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [show, setShow] = useState(false)

  // !CAT IMAGE API
  const fetchCat = async () => {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=9"
    );
    let data = await response.json();
    data = await addFakerData(data)
    setCatData(data)
  };

  const addFakerData = (data) => {
    for (let i = 0; i < data.length; i++) {
      data[i].name = faker.name.firstName()
      data[i].cat = faker.animal.cat()
      data[i].country = faker.address.country()
      data[i].price = faker.commerce.price()
    }
    return data
  }

  const addBasket = (item) => {
    let storedBasket = [...basket]
    storedBasket.push(item)
    setBasket(storedBasket)
  }

  const toggleBasket = () => {
    setShow(!show)
  }

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <Navbar show = {show} toggleBasket = {toggleBasket}/>
      </nav>
      {/* BASKET */}
      <Basket show = {show} basket = {basket}/>
      {/* HEADER */}
      <Header />
      {/* CAT TILE  */}
      <CatTile catData = {catData} addBasket = {addBasket}/>
      {/* FOOTER */}
      <Footer />
      
    </div>
  );
};

export default App;
