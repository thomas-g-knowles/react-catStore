import navbarImage from "../images/CatLogo.webp";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ toggleBasket }, { show }) => {

  return (
    <div className="Basket">
      <img src={navbarImage} alt="Cat Logo" />
      <div className="Home">
        <a>Home</a>
      </div>
      <div className="Contact">
        <a>Contact</a>
      </div>
      <div className="About">
        <a>About</a>
      </div>
      <div className="BasketBtn">
        <button onClick={toggleBasket}>
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Navbar;