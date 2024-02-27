import React, { useContext } from "react";
import "./navabar.css";
import { Link, Outlet } from "react-router-dom";
import { ProductContext } from "../ProductContext";

const Navabar = () => {
  const { cart } = useContext(ProductContext);
  return (
    <>
      <div>
        <div className="nav-main">
          <Link className="logo" to={"/home"}>
          <div className="logo">
            <img src={require("./navimages/edited logo.png")} alt="" />
          </div>
          </Link>
          <div className="serach">
            <div className="div-for-inp">
              <input
                type="text"
                placeholder="   What  are  you  looking  for  ?...."
              />
              <div className="for-srch-logo">
                <img src={require("./navimages/search.png")} alt="" />
              </div>
            </div>
          </div>
          <div className="login-cart">
            <div className="options">
              <img src={require("./navimages/home (1).png")} alt="" />
              <Link className="linking" to={"/"}>
                <span>Home</span>
              </Link>
            </div>
            <div className="options">
              <img src={require("./navimages/shopping-cart.png")} alt="" />

              {cart.length === 0 ? (
                <Link className="linking" to={"/cart"}>
                  <span>Cart</span>
                </Link>
              ) : (
                <Link className="linking" to={"/cart"}>
                  <span>Cart({cart.length})</span>
                </Link>
              )}
            </div>
            <div className="options">
              <img src={require("./navimages/wishlist.png")} alt="" />
              <Link className="linking" to={"/wish"}>
                <span>Wishlist</span>
              </Link>
            </div>
            <div className="options">
              <img src={require("./navimages/file.png")} alt="" />
              <Link className="linking" to={"/carthistory"}>
                <span>History</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navabar;
