import { useEffect, useState } from "react";
import { FloatingLabel,Form, Button } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { ADD_COIN_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";

const EditCoinForm = ({coins, setCoins, handleClose,selected}) => {
  const updateCoin = async (info) =>{
    try {
      const response = await axiosClient.put('/coins'+selected,info);
      console.log(response.data);
      setCoins([...coins.filter(coin=>coin._id!=selected),response.data.coinAdded]);
    } catch (error) {
      console.log(error);
    }
  }
  const getCoin = async()=>{
    try {
      const {data} = await axiosClient.get('/coins/'+selected);
      setValues({
        name:data.name,
        abbreviation:data.abbreviation
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getCoin()
  },[])
  const {setValues, handleKeyUp, handleSubmit} = useForm(ADD_COIN_VALUES, updateCoin)
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

export default EditCoinForm;
