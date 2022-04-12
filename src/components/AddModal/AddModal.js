import { Modal, Button } from "react-bootstrap";
import AddCoinForm from "../AddCoinForm/AddCoinForm";
import "./AddModal.css";

const AddModal = ({showAdd, handleClose, setCoins, coins}) => {
  return (
    <Modal show={showAdd} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Coin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCoinForm setCoins={setCoins} coins={coins} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
  );
};

export default AddModal;
