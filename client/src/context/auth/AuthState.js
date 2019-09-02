import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
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
  const [state, dispatch] = useReducer(AuthContext, initialState);

  const loadUser = () => console.log("load user");

  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/user", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
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
