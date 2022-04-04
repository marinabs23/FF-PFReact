import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";

import CestaService from "../services/cesta-service";
import AddService from "../services/add-service";

export default class ProductoCesta extends Component {
  deleteCesta(producto) {
    CestaService.deleteProductoCesta(producto);
    this.props.cestaMod(CestaService.getProductosCesta());
    this.props.prods(AddService.getProductos());
  }

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <img
            className="float-left"
            src={this.props.producto.imagen}
            alt="Foto Producto"
          />
        </div>
        <div className="col-9">
          <p className="ml-1">
            {this.props.producto.nombre}
            <br />
            <small style={{ opacity: "50%" }}>
              Código del producto: {this.props.producto.id}
            </small>
          </p>
          <p className="ml-1 d-flex" id="" style={{ float: "left" }}>
            {this.props.producto.precio * this.props.producto.cantidad}€
          </p>
          <p className="d-flex" id="" style={{ float: "right" }}>
            x{this.props.producto.cantidad}
          </p>

          <button
            className="btn d-flex pt-0"
            style={{ float: "right" }}
            onClick={() => this.deleteCesta(this.props.producto)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    );
  }
}
