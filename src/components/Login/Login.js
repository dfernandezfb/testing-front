import { useContext } from "react";
import { Form, FloatingLabel, Button, Alert } from "react-bootstrap";
import { BiUserPin } from "react-icons/bi";
import { initialState } from "../../constants";
import { UserContext } from "../../context/UserContext";
import { validationLogin } from "../../helpers/validations";
import useForm from "../../hooks/useForm";
import "./Login.css";

const Login = () => {
  const {login} = useContext(UserContext)
  const { values, errors, handleKeyUp, handleSubmit } = useForm(
    initialState,
    validationLogin,
    login
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
            <Button className="primary-button" type="submit"> Ingresar</Button>
            {Object.keys(errors).length > 0?
            Object.values(errors).map(error=>{
              return <Alert>{error}</Alert>
            }):null}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
