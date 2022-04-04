import React, { Component } from "react";
import ProductoCesta from "./ProductoCesta";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import CestaService from "../services/cesta-service";

export class Cesta extends Component {
  handleCallback = (childData) => {
    this.props.prods(childData);
  };
  handleCallback2 = (childData) => {
    this.props.cestaMod(childData);
  };

  resetCesta() {
    localStorage.setItem("cesta", JSON.stringify([]));
    this.props.cestaMod([]);
    console.log("REeset");
  }

  getPrecioTotal() {
    var precioTotal = 0;
    this.props.cesta.forEach(function (producto) {
      precioTotal += producto.precio * producto.cantidad;
    });
    return precioTotal;
  }

  getNumArticulos() {
    var numArticulosCesta = 0;
    this.props.cesta.forEach(function (producto) {
      numArticulosCesta += producto.cantidad;
    });
    return numArticulosCesta;
  }
  render() {
    return (
      <div className="col-3 cesta shadow p-3 mb-4 bg-white mt-5">
        <h1 className="text-center">Cesta</h1>
        <h3 className="float-left" id="numArticulos" style={{ float: "left" }}>
          {this.getNumArticulos()} artículos
        </h3>
        <h4
          id="preciototal"
          className="float-right mr-1"
          style={{ float: "right" }}
        >
          {this.getPrecioTotal()}€
        </h4>
        <br /> <br />
        <hr />
        <div className="row" id="lista-cesta">
          {this.props.cesta.map((producto) => (
            <ProductoCesta
              key={producto.id}
              producto={producto}
              cestaMod={this.handleCallback2}
              prods={this.handleCallback}
            />
          ))}
        </div>
        <hr />
        <Popup
          trigger={
            <button className="btn btn-dark mx-auto d-block">
              Realizar Pedido
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div>
              <div className="modal-header"> Confirmar Pedido </div>
              <div className="modal-content">
                {" "}
                Esta a punto de finalizar la compra de {this.getNumArticulos()}{" "}
                artículo(s) por un total de {this.getPrecioTotal()}€
                <button
                  className="btn btn-dark mx-auto mt-3"
                  style={{ display: "inline-block" }}
                  onClick={() => {
                    this.resetCesta();
                    close();
                  }}
                >
                  Confirmar
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}

export default Cesta;
