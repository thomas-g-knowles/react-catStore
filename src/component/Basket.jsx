// import CatTile from "./CatTile";

const Basket = (props) => {

    if(!props.show){return null}

    return (
<div className = "basketModel">
    {props.basket.map((item) => (
    <div>
      <h3>{item.name}</h3>
      <h3>{item.cat}</h3>
      <h3>{item.country}</h3>
      <h3>{item.price}</h3>
    </div>
    ))}
</div>
  );
};

export default Basket;
