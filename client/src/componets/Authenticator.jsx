import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuthenticated, loadUser } from "../actions/authActions";

export const Authenticator = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthenticated());
    dispatch(loadUser());
  });
  return <>{children}</>;
};
