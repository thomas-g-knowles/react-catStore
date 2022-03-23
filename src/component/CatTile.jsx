import React from "react";
import { useState, useEffect } from "react";
import faker from "faker";

const CatTile = () => {
  const [catImage, setCatImage] = useState([""]);
    
  // const catData = faker.animal.type(cat)

  // !CAT IMAGE API
  const fetchCat = async () => {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=9"
    );
    let data = await response.json();
    console.log(data);
    setCatImage(data);
    
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="tiles">
      {catImage.map((item, index) => (
        <div>
          <img key={index} src={item.url} alt="image of cat" />
          <p>{faker.name.firstName()}</p>
          <p>{faker.animal.cat()}</p>
          <p>{faker.address.country()}</p>
          <p>{faker.commerce.price()}</p>
          <button> Add to Basket</button>
        </div>
      ))}
    </div>
  );
};
export default CatTile;
