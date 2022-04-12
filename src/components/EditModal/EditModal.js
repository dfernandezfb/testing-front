import { Modal } from "react-bootstrap";
import EditCoinForm from "../EditCoinForm/EditCoinForm";
import "./EditModal.css";

const EditModal = ({showEdit, handleClose, setCoins, coins, selected}) => {
  return (
    <Modal show={showEdit} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Editar Coin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditCoinForm setCoins={setCoins} coins={coins} handleClose={handleClose} selected={selected}/>
        </Modal.Body>
      </Modal>
  );
};

export default EditModal;
