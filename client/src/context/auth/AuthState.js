import React, { useReducer } from "react";
import axios from 'axios';
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";
const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = () => console.log("load user");

  axios.defaults.baseURL = 'http://localhost:5000';
  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      data: formData
    };
    try {
      const res = await axios.post('/api/users', config);
      console.log(res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      console.log(err)
      dispatch({
        type: REGISTER_FAIL,
        payload: 'hello'
      });
    }
  };

  const login = () => console.log("login user");

  const logout = () => console.log("logout user");

  const clearErrors = () => console.log("clear errors");

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        loadUser,
        register,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
