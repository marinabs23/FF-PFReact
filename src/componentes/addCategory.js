import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useNavigate } from "react-router-dom";
import AddService from "../services/add-service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Campo obligatorio
      </div>
    );
  }
};

class AddC extends Component {
  constructor(props) {
    super(props);
    this.submitCategory = this.submitCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = this.estadoInicial;
  }

  estadoInicial = {
    nombreCat: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitCategory(e) {
    e.preventDefault();

    this.form.validateAll();

    AddService.addCategoria(this.state.nombreCat);
    this.props.navigate("/");
    window.location.reload();
  }
  render() {
    return (
      <div className="inner pt-10">
        <Form
          onSubmit={this.submitCategory}
          ref={(c) => {
            this.form = c;
          }}
        >
          <h3 className="text-center mb-3">Nueva Categoria</h3>

          <div className="form-group">
            <label>Nombre de la Categoria</label>
            <Input
              type="text"
              className="form-control"
              name="nombreCat"
              placeholder="Introduzca el nombre de la categoria"
              value={this.state.nombreCat}
              onChange={this.handleChange}
              validations={[required]}
            />
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

function AddCategory(props) {
  let navigate = useNavigate();
  return <AddC {...props} navigate={navigate} />;
}

export default AddCategory;
