import { useContext, useEffect } from "react";
import { Form, FloatingLabel, Button, Alert } from "react-bootstrap";
import { BiUserPin } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { LOGIN_VALUES } from "../../constants";
import { UserContext } from "../../context/UserContext";
import { validationLogin } from "../../helpers/validations";
import useForm from "../../hooks/useForm";
import "./Login.css";

const Login = () => {
  const {login, auth} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(auth){
      navigate('/home')
    }
  },[auth])
  const { values, errors, handleKeyUp, handleSubmit } = useForm(
    LOGIN_VALUES,
    login,
    validationLogin
  );
  return (
    <>
      <div className="login-portada">
        <div className="login-portada-text">
          <BiUserPin className="login-icon" />
          <form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Dirección de correo electrónico"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                className="login-input"
                name="email"
                onKeyUp={handleKeyUp}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Contraseña">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                className="login-input"
                onKeyUp={handleKeyUp}
              />
            </FloatingLabel>
            <div className="text-end my-3">
            <Button className="primary-button" type="submit"> Ingresar</Button>
            </div>
            {Object.keys(errors).length > 0?
            Object.values(errors).map((error,index)=>{
              return <Alert key={index} variant='danger'>{error}</Alert>
            }):null}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
