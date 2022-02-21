import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
import { performLogout } from "../../redux/authActions";
import { showAnonHeader } from "../../redux/Header/headerActions";

const Logout = (props) => {
  const navigate = useNavigate();
  props.performLogout();
  props.showAnonHeader();
  navigate("/");
  return <Navigate to="/" />;
};

const mapDispatchToProps = {
  performLogout,
  showAnonHeader,
};

export default connect(null, mapDispatchToProps)(Logout);
