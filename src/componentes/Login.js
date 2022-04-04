import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth-service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Campo obligatorio
      </div>
    );
  }
};

class Log extends Component {
  constructor(props) {
    super(props);
    this.submitUser = this.submitUser.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = this.estadoInicial;
  }

  estadoInicial = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitUser(e) {
    e.preventDefault();

    this.setState({
      message: "",
    });

    this.form.validateAll();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    if (AuthService.login(user)) {
      this.props.navigate("/");
      window.location.reload();
    }
  }
  render() {
    return (
      <div className="inner pt-10">
        <Form
          onSubmit={this.submitUser}
          ref={(c) => {
            this.form = c;
          }}
        >
          <h3 className="text-center mb-3">Inicio de Sesión</h3>

          <div className="form-group">
            <label>Nombre de usuario</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              placeholder="Introduzca su nombre de usuario"
              value={this.state.username}
              onChange={this.handleChange}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              placeholder="Introduzca su contraseña"
              value={this.state.password}
              onChange={this.handleChange}
              validations={[required]}
            />
          </div>

          <br></br>

          <button type="submit" className="btn btn-dark w-100" id="btn-login">
            Iniciar Sesión
          </button>
        </Form>
      </div>
    );
  }
}

function Login(props) {
  let navigate = useNavigate();
  return <Log {...props} navigate={navigate} />;
}

export default Login;
