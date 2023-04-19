import React, { useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

function AuthState(props) {
  const [state, setState] = useState({
    user: null,
    error: null,
    isAuthenticated: false,
  });
  const register = () => {};
  const login = async (data) => {
    try {
      const responce = await axios.post(
        "http://localhost:5400/user/login",
        data,
        {
          withCredentials: true,
        }
      );

      if (responce.data) {
        setState({ ...state, user: responce.data.user, isAuthenticated: true });
      }
    } catch (err) {
      console.log(err);
      // setState({...state,user:null, isAuthenticated:false})
    }
  };
  // load user get logged in user 
  // send the token with cookie  
  const loadUser = async () => {
    try {
      const res = await axios.get("http://localhost:5400/user/auth", {
        withCredentials: true, // Include cookies in the request
      });
      console.log('load user res',res.data);
      setState({ ...state, user: res.data.user, isAuthenticated: true });
    } catch (err) {
      // console.log(err);
      setState({ ...state, user: null, isAuthenticated: false,images:[] });
    }
  };
  const logout = async() => {
    const res = await axios.get("http://localhost:5400/user/logout");
    console.log(res.data);
    setState({ ...state, isAuthenticated: false, user: null });
  };

  const dashboard = async()=>{
   try {
    const res = await axios.get("http://localhost:5400/user/dashboard", {
        withCredentials: true, // Include cookies in the request
      });
      setState({ ...state,images:res.data.userImages });

   } catch (error) {
       console.log(error);
   }
      

  }

  return (
    <AuthContext.Provider value={{ state, loadUser, logout, login, register,dashboard }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
