import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { ProductContext } from "../ProductContext";
import { Link } from "react-router-dom";
import ModalBill from "../Modal/ModalBill";

const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);

  // const [orderStatus, setOrderStatus] = useState({});

  const [total, setTotal] = useState(0);

  const [totalQuantity, setTotalQuantity] = useState(0);

 const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    let totalPrice = 0;
    let quantity = 0;

    cart.forEach((item) => {
      totalPrice += Number(item.quantityy * item.disPrice);
      quantity += item.quantityy;
    });
    setTotal(totalPrice);
    setTotalQuantity(quantity);
  }, [cart]);

  // const removeItem = (index) => {
  //   const updatedCart = [...cart];
  //   updatedCart.splice(index, 1);
  //   setCart(updatedCart);
  // };

  const removeItem = (index) => {
    const updatedCart = [...cart];

    const removedItem = updatedCart.splice(index, 1)[0];

    const updatedTotal = updatedCart.reduce(
      (acc, curr) => acc + Number(curr.quantityy * curr.disPrice),
      0
    );
    setCart(updatedCart);
    setTotal(updatedTotal);
  };


  console.log(cart);

  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");

  //   if (storedCart) {
  //     setCart(JSON.stringify(storedCart));
  //   }
  // }, [setCart]);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <div>
      <div className="cart-bg">
        {cart.map((item, index) => {
          return (
            <div key={item.id} className="cart-item-main">
              <img className="imagee" src={item.image} alt="" />

              <div className="name-price-cart">
                <h3>{item.discription}</h3>
                <h3>Quantity:{item.quantityy}</h3>
                <h2>₹{item.quantityy * item.disPrice}</h2>
              </div>

              <div className="approval">
                <p>{item.status}</p>
              </div>

              <button
                className="remove-button"
                onClick={() => removeItem(index)}
              >
                Remove from cart
              </button>
            </div>
          );
        })}

        <div className="total-amt">
          <div className="row-one">
            <div className="for-quantity">
              <span>Total Quantity:</span>
              <span className="show-quantity">{totalQuantity}</span>
            </div>
            <div className="for-total">
              <span>Subtotal:</span>
              <span className="amount">Rs:{total}</span>
            </div>
          </div>

          <button className="check-button" onClick={() =>setModalShow(true)}>
            Checkout
          </button>

          <Link className="check-button" to={"/home"}>
            <button className="check-button">Continue Shopping</button>
          </Link>
        </div>
      </div>
        <ModalBill 
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
      
    </div>
  );
};

export default Cart;
