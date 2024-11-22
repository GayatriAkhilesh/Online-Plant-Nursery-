import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import { ProductContext } from '../ProductContext';
import { useNavigate } from 'react-router-dom';
import "./veggies.css";

const Tools = () => {

    const { setSelectedProduct, setCart } = useContext(ProductContext);

  const goTo = useNavigate();

  const ToplantDetails = (product) => {
    setSelectedProduct(product);
    goTo("/detailed");
  };

    const [tools, setTools] = useState([]);

    const getAllTools = async () =>{
        try{
            const res = await axios.get("http://localhost:4300/api/tools");
            const tOols = res.data;
            setTools(tOols);
        }catch (err){
            console.log(err)
        }
    };

    useEffect(() =>{
        getAllTools();
    },[]);

    const myTools = tools.tools;
    console.log(myTools)

  return (
    <div>
        <div className="veggies-main">
        <span>VEGETABLE SEEDS</span>
      </div>

      <div className="veggies-plants">
        {myTools &&
          myTools.map((item) => (
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
  )
}

export default Tools