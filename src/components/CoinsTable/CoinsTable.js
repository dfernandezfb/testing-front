import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const getCoins = async()=>{
    try {
      const {data} = await axiosClient.get('/coins');
      console.log(data);
      setCoins(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getCoins()
  },[])
  console.log(coins);
  return ( 
    <Container className="right-block">
      <h2 className="mb-3">Coins activas</h2>
      <div className="d-flex justify-content-around mb-3">
      <Button variant='success'> Agregar coin</Button>
      <Button variant='warning'> Editar coin</Button>
      <Button variant='danger'> Borrar coin</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Abreviación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bitcoin</td>
            <td>BTC</td>
          </tr>
        </tbody>
      </Table>
    </Container>
   );
}
 
export default CoinsTable;