import React, { useContext, useEffect, useState } from "react";
import "./veggies.css";
import axios from "axios";
import Footer from "../Footer/Footer";
import { ProductContext } from "../ProductContext";
import { useNavigate } from "react-router-dom";

const Vegetables = () => {
  const { setSelectedProduct, setCart } = useContext(ProductContext);

  const goTo = useNavigate();

  const ToplantDetails = (product) => {
    setSelectedProduct(product);
    goTo("/detailed");
  };

  const [vegetables, setVegetables] = useState([]);

  const getAllVeggies = async () => {
    try {
      const res = await axios.get("http://localhost:4300/api/veggies");
      const vegeTables = res.data;
      setVegetables(vegeTables);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllVeggies();
  }, []);

  const myVeggies = vegetables.veggies;
  console.log(myVeggies);

  return (
    <div>
      <div className="veggies-main">
        <span>VEGETABLE SEEDS</span>
      </div>

      <div className="veggies-plants">
        {myVeggies &&
          myVeggies.map((item) => (
            <div className="veggies-item" key={item.id}>
              <div className="linking" onClick={() => ToplantDetails(item)}>
                <img className="imag" src={item.image} alt="" />
                <h3>{item.discription}</h3>
                <h6>₹{item.normalPrice}</h6>
                <h5>₹{item.disPrice}</h5>
                <button className="hover-button">View in Detail</button>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Vegetables;
