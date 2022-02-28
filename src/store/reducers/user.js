// actions types

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
  GET_USER_FAIL,
} from "../actions/types";

// initial state of the store
let initialState = {
  users: [],
  loading: false,
  error: null,
  userAdded: false,
  userUpdated: false,
  user: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_LOADING:
      return { ...state, loading: true, userAdded: false, userUpdated: false };
    case USERS_FETCHED:
      return { ...state, users: [...payload], loading: false, user: null };
    case USERS_FETCH_ERROR:
      return { ...state, error: payload, loading: false };
    case USER_ADD_SUCCESS:
      return { ...state, userAdded: true };
    case USER_ADD_FAIL:
      return { ...state, userAdded: false, error: payload };
    case USER_LOADING:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, user: { ...payload }, loading: false };
    case GET_USER_FAIL:
      return { ...state, error: payload, loading: false };
    case USER_UPDATE_SUCCESS:
      return { ...state, userUpdated: true };
    case USER_UPDATE_FAIL:
      return { ...state, userUpdated: false, error: payload };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload),
      };
    case USER_DELETE_FAIL:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default userReducer;
