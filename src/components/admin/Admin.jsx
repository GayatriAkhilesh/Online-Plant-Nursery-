import React from "react";
import "./admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="admin-main">
        <div className="editing-options">
          <Link className="linking" to={"/add"}>
          <span>1) Add new plants</span>
          </Link>
          <Link className="linking" to={"/edit"}>
          <span>2) Edit plant information</span>
          </Link>
          <Link className="linking" to={"/accept"}>
          <span>3) Manage orders</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
