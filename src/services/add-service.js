var categorias = [
  {
    idCategoria: 1,
    nombre: "Camisetas",
  },
  {
    idCategoria: 2,
    nombre: "Botas",
  },
  {
    idCategoria: 3,
    nombre: "Guantes",
  },
];

var productos = [
  {
    id: 1,
    categoria: 1,
    imagen: "img/camiseta1.jpeg",
    nombre: "1º Equipación Real Madrid 21/22",
    precio: 98.75,
    stock: 2,
  },
  {
    id: 2,
    categoria: 1,
    imagen: "img/camiseta2.jpeg",
    nombre: "1º Equipación FC Barcelona 21/22",
    precio: 89.99,
    stock: 3,
  },
  {
    id: 3,
    categoria: 1,
    imagen: "img/camiseta3.jpeg",
    nombre: "2º Equipación Chelsea FC 21/22",
    precio: 70.99,
    stock: 1,
  },
  {
    id: 4,
    categoria: 1,
    imagen: "img/camiseta4.jpeg",
    nombre: "1º Equipación Juventus 21/22",
    precio: 95.5,
    stock: 3,
  },
  {
    id: 5,
    categoria: 1,
    imagen: "img/camiseta5.jpeg",
    nombre: "1º Equipación Atlético de Madrid 21/22",
    precio: 75.63,
    stock: 3,
  },
  {
    id: 6,
    categoria: 1,
    imagen: "img/camiseta6.jpeg",
    nombre: "1º Equipación Paris Saint-Germain 21/22",
    precio: 82.56,
    stock: 0,
  },
  {
    id: 7,
    categoria: 2,
    imagen: "img/botas1.png",
    nombre: "Adidas X Speedflow +",
    precio: 205.99,
    stock: 5,
  },
  {
    id: 8,
    categoria: 2,
    imagen: "img/botas2.png",
    nombre: "Adidas Predator Freak +",
    precio: 279.99,
    stock: 3,
  },
  {
    id: 9,
    categoria: 2,
    imagen: "img/botas3.png",
    nombre: "Nike Phantom GT2",
    precio: 250.99,
    stock: 1,
  },
  {
    id: 10,
    categoria: 2,
    imagen: "img/botas4.png",
    nombre: "Nike Mercurial Vapor 14 ",
    precio: 295.5,
    stock: 3,
  },
  {
    id: 11,
    categoria: 2,
    imagen: "img/botas5.png",
    nombre: "Nike Tiempo Legend 9",
    precio: 229.99,
    stock: 3,
  },
  {
    id: 12,
    categoria: 2,
    imagen: "img/botas6.png",
    nombre: "Puma Ultra 1.3",
    precio: 219.99,
    stock: 3,
  },
  {
    id: 13,
    categoria: 3,
    imagen: "img/guantes1.jpeg",
    nombre: "Adidas Predator Pro Fingersave",
    precio: 119.99,
    stock: 2,
  },
  {
    id: 14,
    categoria: 3,
    imagen: "img/guantes2.jpeg",
    nombre: "Nike Mercurial Touch Elite Promo",
    precio: 149.99,
    stock: 2,
  },
  {
    id: 15,
    categoria: 3,
    imagen: "img/guantes3.jpeg",
    nombre: "Earhart 3 Pro Misa Rodriguez",
    precio: 59.99,
    stock: 4,
  },
  {
    id: 16,
    categoria: 3,
    imagen: "img/guantes4.jpeg",
    nombre: "Nike Mercurial Vapor Grip 3 Blue Print",
    precio: 45.99,
    stock: 0,
  },
  {
    id: 17,
    categoria: 3,
    imagen: "img/guantes5.jpeg",
    nombre: "UHLSports Pure Alliance Supergrip+",
    precio: 129.99,
    stock: 9,
  },
  {
    id: 18,
    categoria: 3,
    imagen: "img/guantes6.jpeg",
    nombre: "SP Pantera Phobos Protect Elite",
    precio: 59.99,
    stock: 3,
  },
];
/*localStorage.removeItem("productos");
localStorage.removeItem("categorias");
localStorage.removeItem("cesta");*/

class AddService {
  iniProds() {
    localStorage.setItem("productos", JSON.stringify(productos));
  }
  getCategorias() {
    var currentCat;
    var sesionCat = localStorage.getItem("categorias");
    if (sesionCat === null) {
      //si no hay categorias especificas de esta sesion
      currentCat = categorias; //usamos las categorias por defecto
    } else {
      currentCat = JSON.parse(sesionCat);
    }
    return currentCat;
  }

  getProductos() {
    var currentProds;
    var sesionProds = localStorage.getItem("productos");
    if (sesionProds === null) {
      //si no hay productos especificas de esta sesion
      this.iniProds();
      currentProds = productos; //usamos los productos por defecto
    } else {
      currentProds = JSON.parse(sesionProds);
    }
    return currentProds;
  }

  addCategoria(nombreCat) {
    var currentCat;
    var sesionCat = localStorage.getItem("categorias");
    if (sesionCat === null) {
      //si no hay categorias especificas de esta sesion
      currentCat = categorias; //usamos las categorias por defecto
    } else {
      currentCat = JSON.parse(sesionCat);
    }
    const newCategoria = {
      idCategoria: currentCat.length + 1,
      nombre: nombreCat,
    };
    currentCat.push(newCategoria);
    localStorage.setItem("categorias", JSON.stringify(currentCat));
  }

  addProducto(producto) {
    //imagen
    const pathimagen = producto.imagen;
    var arrayDeCadenas = pathimagen.split("\\");
    producto.imagen = "img/" + arrayDeCadenas[2];
    var currentProds;
    var sesionProds = localStorage.getItem("productos");
    if (sesionProds === null) {
      //si no hay categorias especificas de esta sesion
      currentProds = productos; //usamos las categorias por defecto
    } else {
      currentProds = JSON.parse(sesionProds);

      console.log(currentProds);
    }
    producto.id = currentProds.length + 1;
    producto.categoria = parseInt(producto.categoria);
    producto.precio = parseFloat(producto.precio);
    producto.stock = parseFloat(producto.stock);
    currentProds.push(producto);

    console.log(currentProds);
    localStorage.setItem("productos", JSON.stringify(currentProds));
  }
}

export default new AddService();
