import React, { useContext, useEffect, useState } from "react";
import "./style-both.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../ProductContext";
import Footer from "../Footer/Footer";

const Indoor = () => {
  const { setSelectedProduct, setCart } = useContext(ProductContext);

  const goTo = useNavigate();

  const ToplantDetails = (product) => {
    setSelectedProduct(product);
    goTo("/detailed");
  };

  const [indoor, setIndoor] = useState([]);

  const getAllIndoors = async () => {
    try {
      const res = await axios.get("http://localhost:4300/api/indoor");
      const inDoors = res.data;
      setIndoor(inDoors);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllIndoors();
  }, []);

  const myindoors = indoor.inDoorPlants;
  console.log(myindoors);

  return (
    <div>
      <div className="indoor-main">
        <span>INDOOR PLANTS</span>
      </div>

      <div className="indoor-plants">
        {myindoors &&
          myindoors.map((item) => (
            <div className="indoor-item" key={item.id}>
              <div className="linking" onClick={() => ToplantDetails(item)}>
                <img className="imag" src={item.image} alt="" />
                <h3>{item.discription}</h3>
                <h6>₹{item.normalPrice}</h6>
                <h5>₹{item.disPrice}</h5>
                <button
                  className="hover-button">
                  View in Detail
                </button>
                
                  
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Indoor;
