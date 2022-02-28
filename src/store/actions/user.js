

import {
  USERS_FETCHED,
  USERS_LOADING,
  USERS_FETCH_ERROR,
  USER_ADD_SUCCESS,
  USER_ADD_FAIL,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from "./types";
import api from "../../axiosConfig";




// get all users
export const getUsers = () => async (dispatch) => {
  dispatch({ type: USERS_LOADING });
  try {
    const { data } = await api.get("/users");
    dispatch({ type: USERS_FETCHED, payload: data });
  } catch (error) {
    dispatch({ type: USERS_FETCH_ERROR, payload: error.message });
  }
};



// add  a  user
export const addUser = (user) => async (dispatch) => {
  dispatch({ type: USERS_LOADING });
  try {
    await api.post("/users", user);
    dispatch({ type: USER_ADD_SUCCESS});
  } catch (error) {
    dispatch({ type: USER_ADD_FAIL, payload: error.message });
  }
};



// delete a  user
export const deleteUser = (userID) => async (dispatch) => {
  try {
     await api.delete(`/users/${userID}`);

    dispatch({ type: USER_DELETE_SUCCESS,payload:userID});
  } catch (error) {
    dispatch({ type: USER_DELETE_FAIL, payload: error.message });
  }
};



// get userbyId 

export const  getUser = (userID) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const {data} = await api.get(`/users/${userID}`);
    dispatch({ type: GET_USER_SUCCESS,payload:data});
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.message });
  }
};



// edit user

export const  editUser = (userID,updatedUser) => async (dispatch) => {
  try {
    await api.put(`/users/${userID}`, updatedUser);
    dispatch({ type: USER_UPDATE_SUCCESS});
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
};

