import { createContext, useState } from "react";
import axiosClient from "../config/axiosClient";
import authToken from "../helpers/authToken";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user,setUser] = useState(null);  
  const [auth, setAuth] = useState(false)

  const login = async (values) =>{
    try {
      const {data} = await axiosClient.post('/users/login', values);
      setAuth(true)
      localStorage.setItem('token',data.token);
    } catch (error) {
      console.log(error)
      setAuth(false)
    }
  }

  const getAuthUser = async () =>
  {
    const token = localStorage.getItem('token');
    authToken(token);
    try {
      const {data} = await axiosClient.get('/users/auth');
      setUser(data.user);
      setAuth(true);
      console.log('logueo joya');
    } catch (error) {
      console.log('logueo no joya');
      console.log(error);
      setAuth(false);
    }

  }
  

  return ( 
    <UserContext.Provider value={{
      user,
      setUser,
      auth,
      login,
      getAuthUser
    }}>
      {children}
    </UserContext.Provider>
   );
}
 
export default UserProvider;

