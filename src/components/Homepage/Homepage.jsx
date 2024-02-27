import React, { useContext, useEffect, useState } from "react";
import "./homepage.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../ProductContext";
import Footer from "../Footer/Footer";

const Homepage = () => {
  const { setSelectedProduct } = useContext(ProductContext);

  const goTo = useNavigate();

  const ToplantDetails = (product) => {
    setSelectedProduct(product);
    goTo("/detailed");
  };

  const [Plants, setAllPlants] = useState([]);

  const getallPlants = async () => {
    try {
      const res = await axios.get("http://localhost:4300/api/data");
      const plantDatas = res.data;
      setAllPlants(plantDatas);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getallPlants();
  }, []);

  const myPlants = Plants.allPlants;
  console.log(myPlants);

  return (
    <div>
      <div className="homepage">
        <div className="slide-img"></div>
        {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block  slide-img"
              src={require("./homeImages/image-1.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  slide-img"
              src={require("./homeImages/NEW OFFER.png")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  slide-img"
              src={require("./homeImages/new indoor offer.png")}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  slide-img"
              src={require("./homeImages/new outdoor.png")}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  slide-img"
              src={require("./homeImages/NEW VEGGIES.png")}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  slide-img"
              src={require("./homeImages/NEW POTS.png")}
              alt="Sixth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  slide-img"
              src={require("./homeImages/NEW TOOLS.png")}
              alt="Seventh slide"
            />
          </Carousel.Item>
        </Carousel> */}
      </div>

      <div className="plants-homepage">
        <div className="product-heading">
          <h1>Best Sellers</h1>
        </div>
        <div className="products">
          {myPlants &&
            myPlants.map((item) => (
              <div className="product-item" key={item.id}>
                <img className="img" src={item.image} alt="" />
                <h3>{item.discription}</h3>
                <h6>₹{item.normalPrice}</h6>
                <h5>₹{item.disPrice}</h5>
                <div className="wishlist-heart">
                  <div class="heart-container" title="Like">
                    <input
                      type="checkbox"
                      class="checkbox"
                      id="Give-It-An-Id"
                    />
                    <div class="svg-container">
                      <svg
                        viewBox="0 0 24 24"
                        class="svg-outline"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        class="svg-filled"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                      </svg>
                      <svg
                        class="svg-celebrate"
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="10,10 20,20"></polygon>
                        <polygon points="10,50 20,50"></polygon>
                        <polygon points="20,80 30,70"></polygon>
                        <polygon points="90,10 80,20"></polygon>
                        <polygon points="90,50 80,50"></polygon>
                        <polygon points="80,80 70,70"></polygon>
                      </svg>
                    </div>
                  </div>

                  <span className="wish-txt">Add to Wishlist</span>
                </div>
                <div className="linking" onClick={() => ToplantDetails(item)}>
                  <button className="hover-button"> View in Detail</button>
                </div>
                <div />
              </div>
            ))}
        </div>
      </div>
      <div className="categories">
        <div className="first-div">
          <div className="one-of-two">
            <div className="one-in-two">
              <Link className="linking" to={"/indoor"}>
              <img
                className="collage"
                src={require("./homeImages/new indoor offer.png")}
                alt=""
              />
              </Link>
            </div>
            <div className="one-in-two">
              <Link className="linking" to={"/outdoor"}>
              <img
                className="collage"
                src={require("./homeImages/new outdoor.png")}
                alt=""
              />
              </Link>
            </div>
          </div>
          <div className="two-of-two">
            <div className="one-in-three">
              <img className="collages" src={require("./homeImages/NEW VEGGIES.png")} alt="" />
            </div>
            <div className="one-in-three">
              <img className="collages" src={require("./homeImages/NEW POTS.png")} alt="" />
            </div>
            <div className="one-in-three">
              <img className="collages" src={require("./homeImages/NEW TOOLS.png")} alt="" />
            </div>
          </div>
        </div>

        {/* <div className="two-in-one">
          <div className="indoor">
            <img src={require("./homeImages/indoor_category.jpg")} alt="" />
            <Link className="linking" to={"/indoor"}>
              <button className="hover-button-round">Indoor Plants</button>
            </Link>
          </div>
          <div className="outdoor">
            <img src={require("./homeImages/outdoor_category.jpg")} alt="" />
            <Link className="linking" to={"/outdoor"}>
              <button className="hover-button-round">Outdoor Plants</button>
            </Link>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
