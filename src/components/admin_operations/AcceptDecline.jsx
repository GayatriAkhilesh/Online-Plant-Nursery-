import React, { useContext } from "react";
import "./styling.css";
import { ProductContext } from "../ProductContext";

const AcceptDecline = () => {
  const { cart, setCart } = useContext(ProductContext);

  const AcceptOrder = (itemId) => {
    setCart((orders) => {
      return orders.map((booking, index) => {
        console.log("accepted");
        if (index === itemId) {
          return {
            ...booking,
            status: "Order accepted",
          };
        }
        return booking;
      });
    });
  };

  const DeclineOrder = (itemId) => {
    setCart((orders) => {
      return orders.map((booking, index) => {
        if (index === itemId) {
          return {
            ...booking,
            status: "Order rejected",
          };
        }
        return booking;
      });
    });
  };

  return (
    <div>
      <div className="accept-main">
        {cart.map((item,index) => (
          <div key={item.id} className="accepting">
            <div className="image-contain">
              <img src={item.image} alt="" />
            </div>
            <div className="name-qty">
              <h4>{item.discription}</h4>
              <h4>Quantity:{item.quantityy}</h4>
            </div>

            <div className="buttons">
              {item.status === "Order accepted" ? (
                item.status
              ) : item.status === "Order rejected" ? (
                item.status
              ) : (
                <>
                  <button
                    className="accept-bttn"
                    onClick={() => AcceptOrder(index)}
                  >
                    Accept
                  </button>

                  <button
                    className="decline-buttn"
                    onClick={() => DeclineOrder(index)}
                  >
                    Decline
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptDecline;
