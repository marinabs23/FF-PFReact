import React, { Component } from "react";
import Catalogo from "./Catalogo";
import Cesta from "./Cesta";

import CestaService from "../services/cesta-service";

import AddService from "../services/add-service";

export default class Comprar extends Component {
  state = {
    cesta: CestaService.getProductosCesta(),
  };
  handleCallback = (childData) => {
    this.setState({
      cesta: childData,
    });
  };
  handleCallback3 = (childData) => {
    this.setState({
      prods: childData,
    });
  };

  render() {
    return (
      <div className="App container">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-9" id="catalogo">
              <h1 className="text-center mt-3">Catálogo</h1>

              <Catalogo cesta={this.handleCallback} prods={this.state.prods} />
            </div>
          </div>
        </div>

        <Cesta
          cesta={this.state.cesta}
          cestaMod={this.handleCallback}
          prods={this.handleCallback3}
        />
      </div>
    );
  }
}
