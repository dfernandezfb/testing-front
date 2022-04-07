import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PublicRoute = ({children}) => {
  const {auth, getAuthUser} = useContext(UserContext);

  useEffect(()=>{
    getAuthUser();
  },[])
  return ( 
    !auth? children : <Navigate to='/home'/>
   );
}
 
export default PublicRoute;