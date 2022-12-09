import { Link } from "react-router-dom";
// import { ReactComponent as Cart } from '../../assets/icons/Cart.svg';

const Navigation = () => {
  return (
    <nav className="bg-black py-5 px-10 flex flex-row justify-between sticky top-0 left-0 right-0 z-10">
      <Link to="/" className="text-xl text-white">
        Магазин
      </Link>
      <Link to="/cart">{/* <Cart /> */}</Link>
    </nav>
  );
};

export default Navigation;
