import { createContext, useState } from "react";
import axiosClient from "../config/axiosClient";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user,setUser] = useState(null);  
  const [auth, setAuth] = useState(false)

  const login = async (values) =>{
    try {
      const {data} = await axiosClient.post('/users/login', values);
      setAuth(true)
      setUser(data.user);
      localStorage.setItem('token',data.token);
    } catch (error) {
      console.log(error)
    }
  }

  const getAuthUser = () =>
  {
    const token = localStorage.getItem('token');

  }
  

  return ( 
    <UserContext.Provider value={{
      user,
      setUser,
      auth,
      login
    }}>
      {children}
    </UserContext.Provider>
   );
}
 
export default UserProvider;

