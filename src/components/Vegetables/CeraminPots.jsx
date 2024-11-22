import React, { useContext, useEffect, useState } from "react";
import "./veggies.css";
import Footer from "../Footer/Footer";
import { ProductContext } from "../ProductContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CeraminPots = () => {

    const { setSelectedProduct, setCart } = useContext(ProductContext);

    const goTo = useNavigate();
  
    const ToplantDetails = (product) => {
      setSelectedProduct(product);
      goTo("/detailed");
    };

  const [ceramicPots, setCeramicPots] = useState([]);

  const getAllCeramics = async () => {
    try {
      const res = await axios.get("http://localhost:4300/api/ceramic");
      const ceramicpots = res.data;
      setCeramicPots(ceramicpots);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCeramics();
  }, []);

  const myCeramics = ceramicPots.ceramic;
  console.log(myCeramics);

  return (
    <div>
      <div className="veggies-main">
        <span>CERAMIC POTS</span>
      </div>

      <div className="veggies-plants">
        {myCeramics &&
          myCeramics.map((item) => (
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
