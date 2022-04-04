import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useNavigate } from "react-router-dom";
import AddService from "../services/add-service";

var categorias = AddService.getCategorias();
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Campo obligatorio
      </div>
    );
  }
};

class AddP extends Component {
  constructor(props) {
    super(props);
    this.submitProducto = this.submitProducto.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = this.estadoInicial;
  }

  estadoInicial = {
    nombre: "",
    imagen: "",
    precio: "",
    stock: "",
    categoria: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitProducto(e) {
    e.preventDefault();

    this.form.validateAll();

    const producto = {
      id: 0,
      nombre: this.state.nombre,
      imagen: this.state.imagen,
      precio: this.state.precio,
      stock: this.state.stock,
      categoria: this.state.categoria,
    };
    AddService.addProducto(producto);
    this.props.navigate("/");
    window.location.reload();
  }
  render() {
    return (
      <div className="inner pt-10">
        <Form
          onSubmit={this.submitProducto}
          ref={(c) => {
            this.form = c;
          }}
        >
          <h3 className="text-center mb-3">Nuevo Producto</h3>

          <div className="form-group">
            <label className="pt-2">Nombre del Producto</label>
            <Input
              type="text"
              className="form-control"
              name="nombre"
              placeholder="Introduzca el nombre del producto"
              value={this.state.nombre}
              onChange={this.handleChange}
              validations={[required]}
            />
            <label className="pt-2">Imagen del Producto</label>
            <Input
              type="file"
              className="form-control"
              name="imagen"
              value={this.state.imagen}
              onChange={this.handleChange}
              validations={[required]}
            />
            <label className="pt-2">Precio</label>
            <Input
              type="number"
              className="form-control"
              name="precio"
              placeholder="Precio"
              value={this.state.precio}
              onChange={this.handleChange}
              validations={[required]}
            />
            <label className="pt-2">Stock</label>
            <Input
              type="number"
              className="form-control"
              name="stock"
              placeholder="Stock"
              value={this.state.stock}
              onChange={this.handleChange}
              validations={[required]}
            />
            <label className="pt-2">Categoria</label>
            <select
              className="form-select"
              id="categorias-producto"
              name="categoria"
              value={this.state.categoria}
              onChange={this.handleChange}
              validations={[required]}
            >
              {categorias.map((cat) => (
                <option value={cat.idCategoria}>{cat.nombre}</option>
              ))}
            </select>
          </div>

          <br></br>

          <button type="submit" className="btn btn-dark w-100" id="btn-login">
            Añadir
          </button>
        </Form>
      </div>
    );
  }
}

function AddProduct(props) {
  let navigate = useNavigate();
  return <AddP {...props} navigate={navigate} />;
}

export default AddProduct;
