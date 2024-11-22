import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  //setting cart
  const [cart, setCart] = useState([]);
  console.log("caaaaaaaaaaart", cart)

  //setting product for detailed view
  const [selectedProduct, setSelectedProduct] = useState([]);

  // for setting cart for plants in homepage
  const [homePlants, setHomePlants] = useState([]);

  // for setting cart for plants in indoor
  const [forIndoor, setForIndoor] = useState([]);

  //for setting cart for outdoor plants
  const [forOutdoor, setForOutdoor] = useState([]);

  //for setting cart for vegetables
  const [forVegetables, setForVegetables] = useState([]);

  //setting items in vegetables
  const getVegetableData = async () =>{
    try{
      const res = await axios.get("http://localhost:4300/api/veggies");
      const vegan = res.data;
      setForVegetables(vegan);
    }catch(err){
      console.log(err);
    }
  };

  useEffect(() =>{
    getVegetableData();
  },[]);

  const myVegetableData = forVegetables.veggies;

  //setting plants in outdoor
  const getOutdoorData = async () => {
    try {
      const res = await axios.get("http://localhost:4300/api/outdoor");
      const outdoorPlantsData = res.data;
      setForOutdoor(outdoorPlantsData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOutdoorData();
  }, []);

  const myOutdoorPlants = forOutdoor.outDoorPlants;
  // console.log(myOutdoorPlants, "yaaaaaaaa njan vannuuuu");

  // setting plants in indoor
  const getIndoorData = async () => {
    try {
      const res = await axios.get("http://localhost:4300/api/indoor");
      const indoorPlantData = res.data;
      setForIndoor(indoorPlantData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIndoorData();
  }, []);

  const myIndoorPlants = forIndoor.inDoorPlants;
  // console.log(myIndoorPlants, "ys i cameeeeeeeeeeee");

  //setting plants in homepage
  const getHomeData = async () => {
    try {
      const res = await axios.get("http://localhost:4300/api/data");
      const homePlantsData = res.data;
      setHomePlants(homePlantsData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHomeData();
  }, []);

  const homePagePlants = homePlants.allPlants;
  // console.log(homePagePlants);

  //console for detailed view
  // console.log("ithaanu", selectedProduct);

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        cart,
        setCart,
        homePlants,
        setHomePlants,
        homePagePlants,
        forIndoor,
        setForIndoor,
        myIndoorPlants,
        forOutdoor,
        setForOutdoor,
        myOutdoorPlants,
        forVegetables, setForVegetables,myVegetableData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
