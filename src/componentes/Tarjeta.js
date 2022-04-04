import React, { Component } from "react";
import CestaService from "../services/cesta-service";
import AddService from "../services/add-service";

export class Tarjeta extends Component {
  addCesta(producto) {
    CestaService.addProductoCesta(producto);
    this.props.cesta(CestaService.getProductosCesta());
    this.props.prods(AddService.getProductos());
  }

  render() {
    var idBoton = "boton" + this.props.producto.id;
    return (
      <div className="col-lg-4 col-sm-12">
        <div
          id={this.props.producto.id}
          className={
            this.props.producto.stock <= 0 ? "card card-disbled" : "card"
          }
        >
          <img
            className="card-img-top"
            src={this.props.producto.imagen}
            alt="Foto camiseta"
          />
          <div className="card-body justify-content-center">
            <h5 className="card-title">{this.props.producto.nombre}</h5>
            <p className="card-text precio ">{this.props.producto.precio}€</p>
            <p className="card-text stock">
              Stock: {this.props.producto.stock}
            </p>
            <button
              type="button"
              id={idBoton}
              className={"mt-5 btn btn-dark d-block"}
              disabled={this.props.producto.stock === 0}
              onClick={() => this.addCesta(this.props.producto)}
            >
              Añadir
            </button>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default Tarjeta;
