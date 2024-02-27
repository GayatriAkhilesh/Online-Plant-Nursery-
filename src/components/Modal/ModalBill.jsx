import React, { useContext, useEffect, useRef, useState } from "react";
import "./stylingModal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import ModalTitle from "react-bootstrap/esm/ModalTitle";
import ModalBody from "react-bootstrap/esm/ModalBody";
import ModalFooter from "react-bootstrap/esm/ModalFooter";
import { ProductContext } from "../ProductContext";
import { useReactToPrint } from "react-to-print";


const ModalBill = (props) => {
  const { cart } = useContext(ProductContext);
  const [total, setTotal] = useState(0);

  const [totalQuantity, setTotalQuantity] = useState(0);

  const componentRef = useRef();

//   const handleprint = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: "Invoice",

//   });

const handlePrint = () => {
    window.print();
  };


  useEffect(() => {
    let totalPrice = 0;
    let quantity = 0;

    cart.forEach((item) => {
      totalPrice += Number(item.quantityy * item.disPrice);
      quantity += item.quantityy;
    });
    setTotal(totalPrice);
    setTotalQuantity(quantity);
  }, [cart]);


  

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader closeButton>
          <ModalTitle id="contained-modal-title-vcenter">
            <img
              className="bill-logo"
              src={require("../Navabar/navimages/logo.png")}
              alt=""
            />
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="address">
            <label htmlFor="address">
              Shipping Address:
              <input
                type="text"
                placeholder=" House no.,landmark,locality,district,Pincode"
              />
            </label>
          </div>
          <div className="bill-detail">
            <h4>Bill Summary</h4>
            
            <table>
              <tr>
                <th>Id</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {cart.map((item,index)=>(
              <tr>
                <td>{item.id}</td>
                <td>{item.discription}</td>
                <td>{item.quantityy}</td>
                <td>₹{item.quantityy * item.disPrice}</td>
              </tr>
              ))}
            </table>

            <h2>Grand Total : ₹{total}</h2>

            

    
          </div>
        </ModalBody>
        <ModalFooter className="bill-button">
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={ handlePrint}>Print</Button>
        </ModalFooter>
     
      </Modal>
    </div>
  );
};

export default ModalBill;
