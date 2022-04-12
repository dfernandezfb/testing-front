import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AdminRoute = ({children}) => {
  const {auth, getAuthUser, user} = useContext(UserContext);
  useEffect(()=>{
    getAuthUser();
  },[])
  return ( 
    auth? user.role==='ADMIN'? children:<Navigate to='/home'/>:<Navigate to='/login'/>
  );
}
 
export default AdminRoute;