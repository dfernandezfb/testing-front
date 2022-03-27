import { Form, FloatingLabel, Button } from "react-bootstrap";
import {BiUserPin} from 'react-icons/bi'
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-portada">
        <div className="login-portada-text">
          <BiUserPin className="login-icon"/>
          <FloatingLabel
            controlId="floatingInput"
            label="Dirección de correo electrónico"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="nombre@ejemplo.com" className="login-input"/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Contraseña">
            <Form.Control type="password" placeholder="Contraseña" className="login-input"/>
          </FloatingLabel>
          <Button className="primary-button"> Ingresar</Button>
        </div>
      </div>
    </>
  );
};

export default Login;
