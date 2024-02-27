import React, { useState } from 'react';
import {} from "react-bootstrap"

const Login = () => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <div></div>
  )
}

export default Login