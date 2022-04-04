import React, { Component } from "react";
import Categoria from "./Categoria";
import TituloCategoria from "./TituloCategoria";

import AddService from "../services/add-service";

var categorias = AddService.getCategorias();
//var productos = AddService.getProductos();
export class catalogo extends Component {
  state = {
    productos: this.getstate(),
  };

  getstate() {
    if (this.props.prods === undefined) {
      console.log("IF STATE");
      return AddService.getProductos();
    } else {
      console.log("ELSE STATE");
      return this.props.prods;
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.prods !== prevProps.prods) {
      this.setState({
        productos: this.getstate(),
      });
    }
  }

  handleCallback3 = (childData) => {
    this.setState({
      productos: childData,
    });
  };

  handleCallback = (childData) => {
    this.setState({
      ["categoria" + childData[1]]: childData[0],
    });
  };

  handleCallback2 = (childData) => {
    this.props.cesta(childData);
  };

  getProductosCat = (cat) => {
    var productosCat = this.state.productos.filter(
      //filtramos solo los productos que pretenezcan a la categoria que vamos a pintar
      (articulo) => articulo.categoria === cat.idCategoria
    );
    return productosCat;
  };

  render() {
    return (
      <React.Fragment>
        {" "}
        {categorias.map((cat) => (
          <div>
            <TituloCategoria
              titulo={cat.nombre}
              idCategoria={cat.idCategoria}
              visibilidad={this.handleCallback}
            />
            <Categoria
              productos={this.getProductosCat(cat)}
              idCategoria={cat.idCategoria}
              visible={this.state["categoria" + cat.idCategoria]}
              cesta={this.handleCallback2}
              prods={this.handleCallback3}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default catalogo;
