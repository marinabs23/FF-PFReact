import React, { Component } from "react";
import Tarjeta from "./Tarjeta";

class Categoria extends Component {
  constructor() {
    super();
    this.state = {
      object: {},
    };
  }

  handleCallback3 = (childData) => {
    this.props.prods(childData);
  };
  handleCallback2 = (childData) => {
    this.props.cesta(childData);
  };
  mostrarProductos = () => {
    const productos = this.props.productos;
    if (productos.length === 0 || this.props.visible === false) return null;

    return (
      <React.Fragment>
        <div
          className="col-12 row fade-in"
          id={"categoria" + this.props.idCategoria}
        >
          {productos.map((producto) => (
            <Tarjeta
              key={producto.id}
              producto={producto}
              cesta={this.handleCallback2}
              prods={this.handleCallback3}
            />
          ))}
        </div>
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.mostrarProductos()}</React.Fragment>;
  }
}

export default Categoria;
