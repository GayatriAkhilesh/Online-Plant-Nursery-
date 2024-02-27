import React, { useContext, useEffect, useState } from "react";
import "./detailed.css";
import { ProductContext } from "../ProductContext";
import Footer from "../Footer/Footer";


const Detailed = () => {
  const { selectedProduct, cart, setCart } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(
    selectedProduct ? selectedProduct.disPrice : 0
  );

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    setTotalAmount(
      selectedProduct ? newQuantity * selectedProduct.disPrice : 0
    );
  };

  const handleAddtoCart = () => {
    console.log(quantity,'jjjj');
    const itemToAdd = {
      ...selectedProduct,
      quantityy: quantity,
      totalAmount: totalAmount,
    };
    console.log(itemToAdd,"adddddd");
    setCart((prev) => [...prev, itemToAdd]);
    alert("item added to cart");
  };

  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");

  //   if (storedCart) {
  //     setCart(JSON.stringify(storedCart));
  //   }
  // }, [setCart]);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  // const goTo =useNavigate()

  // const ToplantDetails = (product) => {
  //   setSelectedProduct(product);
  //   goTo('/detailed')
  // };

  return (
    <div>
      <div className="detailed-main">
        {selectedProduct && (
          <div className="image-container">
            <img src={selectedProduct.image} alt="" />
          </div>
        )}
        <div className="details">
          {selectedProduct && (
            <div className="name-price">
              <h3>{selectedProduct.discription}</h3>
              <span className="grey-txt">₹{selectedProduct.normalPrice}</span>
              <span className="normal">₹{selectedProduct.disPrice}</span>
            </div>
          )}
          <div className="abt-shipping">
            <h6>(MRP Inclusive of all taxes)</h6>
            <h6>Shipping ₹79 for entire order</h6>
            <h6>Dispatch in 7 days</h6>
            <h6>Country of origin: India</h6>
            <div className="add-to-cart">
              <div className="quantity">
              <select name="" id="" value={quantity} onChange={handleQuantityChange}>
              <option disabled selected value="Choose the quantity">Choose the quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

              </div>
              <div className="linking">
                <button
                  className="addCart-button"
                  onClick={() => handleAddtoCart(selectedProduct)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="offers">
            <div className="offer-heading">
              <h3>Today's Offers</h3>
            </div>
            <div className="points">
              <img
                className="idi-icon"
                src={require("./detailed_images/leaf.png")}
                alt=""
              />
              <span>
                Get ₹249 Air Purifier Money Plant Free *On orders above 599
              </span>
            </div>
            <div className="points">
              <img
                className="idi-icon"
                src={require("./detailed_images/leaf.png")}
                alt=""
              />
              <span>Get ₹275 Vegetable garden pack *On orders above 599</span>
            </div>
            <div className="points">
              <img
                className="idi-icon"
                src={require("./detailed_images/leaf.png")}
                alt=""
              />
              <span>
                Get Pack of 6 Colourful Pots Free *On orders above 599
              </span>
            </div>
            <div className="points">
              <img
                className="idi-icon"
                src={require("./detailed_images/leaf.png")}
                alt=""
              />
              <span>
                Get Pack of 2 Plant Growth Booster Free *On all orders
              </span>
            </div>
            <div className="points">
              <img
                className="idi-icon"
                src={require("./detailed_images/leaf.png")}
                alt=""
              />
              <span>
                Get Pack of 2 Special Flower Booster Free *On all orders
              </span>
            </div>
            <div className="points">
              <img
                className="idi-icon"
                src={require("./detailed_images/leaf.png")}
                alt=""
              />
              <span>Earn 200% ncash On all orders placed today</span>
            </div>
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="note">
          <span>
            *Images are for reference purposes only. Actual product may vary in
            shape or appearance based on climate, age, height, etc. The product
            is replaceable but not returnable.
          </span>
        </div>
        <div className="features">
          <h2>Special Features</h2>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Improve air quality by filtering out pollutants and releasing
            oxygen.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Provide habitats for wildlife, promoting biodiversity.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Increase humidity levels, which can be beneficial in dry indoor
            environments.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Support mental well-being by offering opportunities for relaxation
            and enjoyment of nature.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Act as natural air purifiers by absorbing toxins.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Create shade and reduce temperatures in outdoor spaces.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Improve mental health by creating a connection with nature.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Increase community engagement through gardening clubs and outdoor
            events.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Encourage creativity and imagination.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Foster a sense of stewardship and responsibility towards the
            environment.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Help reduce background noise levels.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Absorb carbon dioxide and release oxygen, contributing to cleaner
            air.
          </span>
          <span>
            <img src={require("./detailed_images/single leaf.png")} alt="" />
            Promote relaxation and calmness.
          </span>
        </div>
        <p>
          You can decorate your house or room with these adorable plants. The
          plants in this pack are loved among the gardeners for their beauty and
          they are low maintenance plants. This plant is best to add beauty and
          texture to both interior and surroundings.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Detailed;
