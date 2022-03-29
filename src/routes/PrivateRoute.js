import { useContext, useEffect } from 'react';
import {Navigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({children}) => {
  const {auth, getAuthUser} = useContext(UserContext)

  useEffect(()=>{
    getAuthUser();
  },[])

  return ( 
    auth? children : <Navigate to='/'/>
   );
}
 
export default PrivateRoute;