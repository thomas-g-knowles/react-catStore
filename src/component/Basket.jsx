// import CatTile from "./CatTile";

const Basket = (props) => {

    if(!props.show){return null}

    return (
      <div className = "basketModel">
          {props.basket.map((item, index) => (
          <div>
            <img key={index} src={item.url} alt="image of cat" />
            <h3>{item.name}</h3>
            <h3>£ {item.price}</h3>
            <button onClick={() => props.removeItem(index)}>Remove Cat</button>
          </div>
          ))}
          <h4>Total Price: £ {props.sum}</h4>
      </div>
        );
      };

export default Basket;
