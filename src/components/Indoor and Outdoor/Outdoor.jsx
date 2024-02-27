import React, { useContext, useEffect, useState } from "react";
import "./style-both.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../ProductContext";
import Footer from "../Footer/Footer";

const Outdoor = () => {
  const { setSelectedProduct, cart, setCart } =
    useContext(ProductContext);

  const goTo = useNavigate();

  const ToplantDetails = (product) => {
    setSelectedProduct(product);
    goTo("/detailed");
  };

  const [outdoor, setOutdoor] = useState([]);

  const getAllOutdoors = async () => {
    try {
      const res = await axios.get("http://localhost:4300/api/outdoor");
      const outDoors = res.data;
      setOutdoor(outDoors);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllOutdoors();
  }, []);

  const myoutdoors = outdoor.outDoorPlants;
  console.log(myoutdoors);

  return (
    <div>
      <div className="">
        <div className="indoor-main">
          <span>OUTDOOR PLANTS</span>
        </div>

        <div className="indoor-plants">
          {myoutdoors &&
            myoutdoors.map((item) => (
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
      </div>

      <Footer />
    </div>
  );
};

export default Outdoor;
