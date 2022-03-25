import React from "react";

const CatTile = ({ catData, addBasket }) => {
  
  // const counter = 0;

  // addCounter = () => {
  //   counter +1
  // }

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
    </div>
  );
};

export default CatTile;
