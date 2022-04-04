class AuthService {
  login(user) {
    //comprobar qque la contraseña es correcta
    console.log(user.username + " " + user.password);
    if (user.username === "admin" && user.password === "admin") {
      localStorage.setItem("user", user.username);
      return true;
    } else {
      alert("usuario y/o contraseña incorrectos");
      return false;
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    console.log("getuser ");
    var usur = localStorage.getItem("user");
    console.log(usur);
    return localStorage.getItem("user");
  }
}

export default new AuthService();
