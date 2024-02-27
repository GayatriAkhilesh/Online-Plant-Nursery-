import React, { useEffect, useState } from "react";
import "./mainlogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Mainlogin = () => {
  const locate = useNavigate();

  const [adminLogin, setAdminLogin] = useState([]);

  const loginKey = async () => {
    try {
      const res = await axios.post("http://localhost:4300/api/login");
      const keyLogin = res.data;
      setAdminLogin(keyLogin);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loginKey();
  }, []);

  const myKey = adminLogin.adminkey;
  console.log(myKey, "ewrqt4rwehhyejee");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");

  const [errorPassword, setErrorPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const validateEmail = () => {
  //   if (!email) {
  //     setErrorEmail("Email is required");
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     setErrorEmail("Invalid Email");
  //   } else setErrorEmail("");
  // };

  console.log("s dftgyhujiuytfdxcvghjhgvfcbhjhgfjh---", myKey);

  function logIN() {
    let check = document.querySelector(".check");

    const validEmail = /\S+@\S+\.\S+/.test(email);
    const validPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );

    if (validEmail && validPassword) {
      if (email === myKey.email && password === myKey.password) {
        locate("/admin");
      } else if (!validEmail && !validPassword) {
        check.innerHTML = "Not Valid";
        
      } else if (validEmail && validPassword) {
        locate("/home");
      }
    }
  }
  // const validatePassword = () => {
  //   if (!password) {
  //     setErrorPassword("This field cannot be empty");
  //   } else if (
  //     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
  //       password
  //     )
  //   ) {
  //     setErrorPassword("Password Invalid");
  //   } else {
  //     setErrorPassword("");
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   validateEmail();
  //   validatePassword();

  //   if (!errorEmail && !errorPassword) {
  //     if (email == myKey.email && password == myKey.password) {
  //       // console.log(myKey,"hddhtedtdrtytdtdtyttfrtfff");

  //       console.log("navigating to admin");
  //       locate("/admin");
  //     } else {
  //       console.log("Credentials do not match, navigating to home page...");
  //       locate("/home");
  //     }
  //   } else {
  //     return;
  //   }
  // };

  return (
    <div>
      <div className="main">
        <div className="login-content">
          <div className="heading">
            <span>LOGIN</span>
          </div>
          <div className="welcome">
            <span>
              "Welcome to our online plant nursery, where green dreams blossom
              into reality"{" "}
            </span>
          </div>
          <div className="email">
            <label htmlFor="email">Enter your Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              // onBlur={validateEmail}
            />
            {errorEmail && <span>{errorEmail}</span>}
          </div>
          <div className="password">
            <label htmlFor="passowrd">Password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              // onBlur={validatePassword}
            />
            {/* {errorPassword && <span>{errorPassword}</span>} */}

            <span className="check"></span>
          </div>
          <div className="login-btn">
            <button onClick={logIN}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainlogin;
