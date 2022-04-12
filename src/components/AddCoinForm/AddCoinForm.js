import { FloatingLabel,Form, Button } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { ADD_COIN_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";

const AddCoinForm = ({coins, setCoins, handleClose}) => {
  const addCoin = async (info) =>{
    try {
      console.log(coins);
      const response = await axiosClient.post('/coins',info);
      console.log([...coins,response.data.coinAdded]);
      setCoins([...coins,response.data.coinAdded]);
    } catch (error) {
      console.log(error);
    }
  }
  const {values, handleKeyUp, handleSubmit} = useForm(ADD_COIN_VALUES, addCoin)
  return (
    <form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Nombre de la coin"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Por ejemplo, Pepito"
          className=""
          name="name"
          onKeyUp={handleKeyUp}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Abreviación de la coin">
        <Form.Control
          type="text"
          placeholder="PEP"
          name="abbreviation"
          className=""
          onKeyUp={handleKeyUp}
        />
      </FloatingLabel>
      <div className="text-end my-3">
        <Button className="primary-button" type="submit" onClick={handleClose}>
          Agregar
        </Button>
      </div>
    </form>
  );
};

export default AddCoinForm;
