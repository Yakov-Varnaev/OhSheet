import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthenticated, loadUser } from "../actions/authActions";

export const Authenticator = ({ children }) => {
  const dispatch = useDispatch();
  dispatch(checkAuthenticated());
  dispatch(loadUser());
  return <>{children}</>;
};
