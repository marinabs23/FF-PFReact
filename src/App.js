import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./services/auth-service";
import { Nav, Navbar, Container } from "react-bootstrap";
import coin from "./images/coin3.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Comprar from "./componentes/Comprar";
import Login from "./componentes/Login";
import AddCategory from "./componentes/addCategory";

import AddProduct from "./componentes/addProduct";

window.onunload = () => {
  localStorage.removeItem("cesta");
};
export class App extends Component {
  constructor(props) {
    super(props);
    this.cerrarSesion = this.cerrarSesion.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }
  cerrarSesion() {
    AuthService.logout();
    this.setState({
      //se borra el usuario
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/">
              FutbolEmotion <img src={coin} className="logo"></img>
            </Navbar.Brand>

            {currentUser ? ( //sesion iniciada
              <>
                <Nav className="me-auto">
                  <Nav.Link href="/addProduct">Añadir Producto</Nav.Link>
                  <Nav.Link href="/addCategory">Añadir Categoria</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                  <Nav.Link href="/" onClick={() => this.cerrarSesion()}>
                    Cerrar Sesión
                  </Nav.Link>
                </Nav>
              </>
            ) : (
              //sin iniciar sesion+
              <Nav className="ms-auto">
                <div className="navbar-nav ">
                  <li className="nav-item">
                    <Nav.Link
                      className="nav-link ml-auto"
                      to={"/login"}
                      href="/login"
                    >
                      Iniciar Sesión
                    </Nav.Link>
                  </li>
                </div>
              </Nav>
            )}
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Comprar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
