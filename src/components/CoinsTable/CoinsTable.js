import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import AddModal from "../AddModal/AddModal";
import EditModal from "../EditModal/EditModal";
import './CoinsTable.css'

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleClose = () => setShowAdd(false);
  const handleShow = () => setShowAdd(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const getCoins = async()=>{
    try {
      const {data} = await axiosClient.get('/coins');
      setCoins(data.coins);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteCoin = async(id) =>{
    try {
      await axiosClient.delete('/coins/'+id);
      setCoins(coins.filter(coin=>coin._id!=id));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getCoins()
  },[])
  console.log(selected);
  return ( 
    <Container className="right-block">
      <h2 className="mb-3">Coins activas</h2>
      <div className="d-flex justify-content-around mb-3">
      <Button variant='success' onClick={handleShow}> Agregar coin</Button>
      <Button variant='warning' onClick={handleShowEdit}> Editar coin</Button>
      <Button variant='danger' onClick={()=>deleteCoin(selected)}> Borrar coin</Button>
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
          {coins?.map((coin)=>
          selected==coin._id?
          <tr key={coin._id} onClick={()=>setSelected(coin._id)} className='coins selected'>
            <td>{coin._id}</td>
            <td>{coin.name}</td>
            <td>{coin.abbreviation}</td>
          </tr>
          :
          <tr key={coin._id} onClick={()=>setSelected(coin._id)} className='coins'>
          <td>{coin._id}</td>
          <td>{coin.name}</td>
          <td>{coin.abbreviation}</td>
        </tr>)}
        </tbody>
      </Table>
      <AddModal showAdd={showAdd} handleClose={handleClose} setCoins={setCoins} coins={coins}/>
      <EditModal showEdit={showEdit} handleClose={handleCloseEdit} setCoins={setCoins} coins={coins} selected={selected}/>
    </Container>
   );
}
 
export default CoinsTable;


// import { useEffect, useState } from "react";
// import { Container, Table, Button } from "react-bootstrap";
// import axiosClient from "../../config/axiosClient";
// import AddModal from "../AddModal/AddModal";
// import './CoinsTable.css'

// const CoinsTable = () => {
//   const [coins, setCoins] = useState([]);
//   const [showAdd, setShowAdd] = useState(false);
//   let selected;
//   const handleClose = () => setShowAdd(false);
//   const handleShow = () => setShowAdd(true);
//   const getCoins = async()=>{
//     try {
//       const {data} = await axiosClient.get('/coins');
//       setCoins(data.coins);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const deleteCoin = async(id) =>{
//     try {
//       await axiosClient.delete('/coins/'+id);
//       setCoins(coins.filter(coin=>coin._id!=id));
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(()=>{
//     getCoins()
//   },[])
//   console.log(selected);
//   return ( 
//     <Container className="right-block">
//       <h2 className="mb-3">Coins activas</h2>
//       <div className="d-flex justify-content-around mb-3">
//       <Button variant='success' onClick={handleShow}> Agregar coin</Button>
//       <Button variant='warning'> Editar coin</Button>
//       <Button variant='danger' onClick={()=>deleteCoin(selected)}> Borrar coin</Button>
//       </div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Nombre</th>
//             <th>Abreviación</th>
//           </tr>
//         </thead>
//         <tbody>
//           {coins?.map((coin)=>
//           <tr key={coin._id} onClick={()=>selected=coin._id} className='coins'>
//             <td>{coin._id}</td>
//             <td>{coin.name}</td>
//             <td>{coin.abbreviation}</td>
//           </tr>
//           )}
//         </tbody>
//       </Table>
//       <AddModal showAdd={showAdd} handleClose={handleClose} setCoins={setCoins} coins={coins}/>
//     </Container>
//    );
// }
 
// export default CoinsTable;