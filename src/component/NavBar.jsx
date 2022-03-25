import navbarImage from "../images/catlogo.png"

const Navbar = ( {toggleBasket}, {show} ) => {

  const textChange = show ? "Basket" : "Close Basket"

  return (
    <div>
      <button onClick = {toggleBasket}>{textChange}</button>
      <img src={navbarImage} alt="Cat Logo" />
    </div>
  );
};

export default Navbar;