import React from "react";
import "./App.css";
import Navabar from "./components/Navabar/Navabar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Cart from "./components/Cart/Cart";
import Admin from "./components/admin/Admin";
import Mainlogin from "./components/mainloginpage/Mainlogin";
import Carthistory from "./components/Carthistory/Carthistory";
import Indoor from "./components/Indoor and Outdoor/Indoor";
import Outdoor from "./components/Indoor and Outdoor/Outdoor";
import Detailed from "./components/detailedpage/Detailed";
import { ProductProvider } from "./components/ProductContext";
import Additems from "./components/admin_operations/Additems";
import Edititems from "./components/admin_operations/Edititems";
import AcceptDecline from "./components/admin_operations/AcceptDecline";
import Wishlist from "./components/wishlist/Wishlist";
import ModalBill from "./components/Modal/ModalBill";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Mainlogin />} />
          <Route path="modal" element={<ModalBill/>}/>
          <Route path="/" element={<Navabar />}>
            <Route path="/home" element={<Homepage />} />
            <Route path="/detailed" element={<Detailed />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wish" element={<Wishlist/>}/>
            <Route path="/carthistory" element={<Carthistory />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/indoor" element={<Indoor />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/add" element={<Additems/>}/>
            <Route path="/edit" element={<Edititems/>}/>
            <Route path="/accept" element={<AcceptDecline />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
