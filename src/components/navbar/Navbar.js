import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <div className="navbar">
      <Link to="/">
        <h2>shopinn</h2>
      </Link>
      <ul className="navbar-ul">
        <li>filters</li>
        <li>Rating: 3.0+</li>
        <li>Veg  & NonVeg</li>
        <li>Cuisines</li>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <button className="nav-btn">Hi, John</button>
      </ul>
    </div>
  );
};

export default Navbar;