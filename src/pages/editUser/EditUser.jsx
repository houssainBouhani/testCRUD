import React, { useEffect} from "react";

import { useParams } from "react-router-dom";


//hooks
import { useDispatch, useSelector } from "react-redux";

// action creator
import { getUser } from "../../store/actions/user";
import EditForm from "./editForm";


const EditUser = () => {
  // get the user from the redux store
  const userbyId = useSelector((state) => state.userReducer.user);
  // get user id from params
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch,id]);

  console.log(userbyId);
// pass in the id,user to the form so we can  prefill them in form for edit 
  return userbyId  ? <EditForm userbyId={userbyId} id={id} /> : <div> loading ...</div>;
};

export default EditUser;
