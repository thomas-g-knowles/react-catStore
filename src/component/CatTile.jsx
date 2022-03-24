import React from "react";
import { useState, useEffect } from "react";
import faker from "faker";

const CatTile = () => {
  const [catData, setcatData] = useState([]);
  const [basket, setBasket] = useState([])
  // const catData = faker.animal.type(cat)

  // !CAT IMAGE API
  const fetchCat = async () => {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=9"
    );
    let data = await response.json();
    data = await addFakerData(data)
    setcatData(data)
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

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div>
      <div className="tiles">
        {catData.map((item, index) => (
          <div>
            <img key={index} src={item.url} alt="image of cat" />
            <p>{item.name}</p>
            <p>{item.cat}</p>
            <p>{item.country}</p>
            <p>{item.price}</p>
            <button onClick={() => {addBasket(item)}}> Add to Basket</button>
          </div>
        ))}
      </div>

      {/* <div className="basket">
        {basket.map((item) => {
          <div>
            <h6>{item.name}</h6>
          </div>
        })}
      </div> */}
    </div>

  );
};
export default CatTile;
