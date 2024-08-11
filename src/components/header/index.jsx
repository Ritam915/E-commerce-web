import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-beetween h-20 max-w-6x1 mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold  text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6  text-grey-800 font-semibold">
          <Link to={"/"}>
            <li className="cursour-pointer list-none">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className="cursour-pointer ">cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
