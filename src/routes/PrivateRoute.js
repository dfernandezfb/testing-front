import { useContext, useEffect } from 'react';
import {Navigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({children}) => {
  const {auth, getAuthUser} = useContext(UserContext)

  useEffect(()=>{
    console.log(auth);
    getAuthUser();
  },[])
  return ( 
    auth? children : <Navigate to='/login'/>
   );
}
 
export default PrivateRoute;
