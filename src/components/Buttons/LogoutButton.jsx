import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import firebase from "../../firebase/firebase";

const LogoutButton = () => {
  const location = useLocation();
  if (location.pathname !== "/login") {
    return (
      <Button
        variant="outline-danger"
        onClick={() => firebase.auth().signOut()}
      >
        Logout
      </Button>
    );
  } else {
    return <></>;
  }
};

export default LogoutButton;
