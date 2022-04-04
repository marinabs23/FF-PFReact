import React, { Component } from "react";

export class TituloCategoria extends Component {
  state = {
    vis: false,
  };

  onTrigger = (event) => {
    // cambiamos de visible a no visible o viceversa

    if (this.state.vis) {
      this.setState({ vis: false });
    } else {
      this.setState({ vis: true });
    }
    this.props.visibilidad([this.state.vis, this.props.idCategoria]);
    event.preventDefault();
  };
  render() {
    return (
      <h3
        className={this.state.vis ? "active toggle-btn" : "toggle-btn"}
        style={{ width: "190px" }}
        id={"titulo" + this.props.idCategoria}
        onClick={this.onTrigger}
      >
        {this.props.titulo} <span className="pt-2 arrow"></span>
      </h3>
    );
  }
}

export default TituloCategoria;
