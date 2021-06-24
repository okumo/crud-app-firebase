import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";

import firebase from "./firebase/firebase";
import Home from "./components/Home/Home";
import CodeScaner from "./components/CodeScaner/CodeScaner";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { AuthProvider } from "./utils/Auth";
import LoginForm from "./utils/LoginForm";
import SignUp from "./utils/SignUp";
import PrivateRoute from "./utils/PrivateRoute";
import LogoutButton from "./components/Buttons/LogoutButton";
// import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  // const [isTokenFound, setTokenFound] = useState(false);

  window.onload = function Ejemplo1(params) {
    setTimeout(() => {
      new Notification("Hi there")

    }, hora());
  }
  

  function hora() {
    let horaActual = new Date()
    let horaProgramada = new Date();
    horaProgramada.setHours(18);
    horaProgramada.setMinutes(11);
    horaProgramada.setSeconds(0);
    return horaProgramada.getTime() - horaActual.getTime()
  }
  useEffect(() => {
    const messaging = firebase.messaging();
    Notification.requestPermission().then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log("Token: ", token);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="">Linea 1</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/form" className="nav-link">
                Control de Pasajeros
              </Link>
              <Link to="/qrscaner" className="nav-link">
                CodeScaner
              </Link>
            </Nav>
            <Form inline>
              <LogoutButton />
            </Form>
          </Navbar>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/form" component={RegisterForm} />
            <PrivateRoute path="/qrscaner" component={CodeScaner} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
