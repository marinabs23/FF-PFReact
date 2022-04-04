var cesta = [];
//id, imagen, nombre, precii, cantidad

class CestaService {
  getProductosCesta() {
    var currentCesta;
    var sesionCesta = localStorage.getItem("cesta");
    if (sesionCesta === null) {
      //si no hay productos especificas de esta sesion
      currentCesta = cesta; //usamos los productos por defecto -> cesta vacia
    } else {
      currentCesta = JSON.parse(sesionCesta);
    }
    return currentCesta;
  }

  updateStock(producto) {
    var currentProds;
    var sesionProds = localStorage.getItem("productos");
    if (sesionProds !== null) {
      currentProds = JSON.parse(sesionProds);
      //disminuimos el stock de la tarjeta
      currentProds.forEach((prod) => {
        if (prod.id === producto.id) {
          prod.stock -= 1;
        }
      });
    }

    localStorage.setItem("productos", JSON.stringify(currentProds));
  }

  updateStockBorrar(producto) {
    var currentProds;
    var sesionProds = localStorage.getItem("productos");
    if (sesionProds !== null) {
      currentProds = JSON.parse(sesionProds);
      //disminuimos el stock de la tarjeta
      currentProds.forEach((prod) => {
        if (prod.id === producto.id) {
          prod.stock += 1;
        }
      });
    }

    localStorage.setItem("productos", JSON.stringify(currentProds));
  }

  addProductoCesta(producto) {
    var currentCesta;
    var sesionCesta = localStorage.getItem("cesta");
    if (sesionCesta === null) {
      currentCesta = cesta;
    } else {
      currentCesta = JSON.parse(sesionCesta);
    }
    //busca si el articulo a añadir ya esta en la cesta
    var productCesta = currentCesta.filter(
      (articulo) => articulo.id === producto.id
    );

    if (productCesta.length > 0) {
      //si el articulo ya esta en la cesta
      currentCesta.forEach((prod) => {
        if (prod.id === productCesta[0].id) {
          var newPro = {
            id: producto.id,
            imagen: producto.imagen,
            nombre: producto.nombre,
            precio: parseFloat(producto.precio),
            cantidad: (productCesta[0].cantidad += 1),
          };
        }
      });
    } else {
      // si el articulo no esta todavia en la cesta
      //añadimos el articulo
      var newPro = {
        id: producto.id,
        imagen: producto.imagen,
        nombre: producto.nombre,
        precio: parseFloat(producto.precio),
        cantidad: 1,
      };
      currentCesta.push(newPro);
    }
    localStorage.setItem("cesta", JSON.stringify(currentCesta));
    this.updateStock(producto);
  }

  deleteProductoCesta(producto) {
    console.log("borramos producto a cesta click");
    console.log(producto);

    var currentCesta;
    var sesionCesta = localStorage.getItem("cesta");
    if (sesionCesta === null) {
      currentCesta = cesta;
    } else {
      currentCesta = JSON.parse(sesionCesta);
    }
    //busca si el articulo a añadir ya esta en la cesta
    var productCesta = currentCesta.filter(
      (articulo) => articulo.id === producto.id
    );

    if (productCesta[0].cantidad === 1) {
      //si el articulo solo esta en la cesta una vez
      currentCesta.forEach((prod) => {
        if (prod.id === productCesta[0].id) {
          //borra el producto de la cesta
          currentCesta.splice(currentCesta.indexOf(prod), 1);
        }
      });
    } else {
      // si el articulo esta mas de una vez
      //disminuimos cantidad
      currentCesta.forEach((prod) => {
        if (prod.id === productCesta[0].id) {
          prod.cantidad -= 1;
        }
      });
    }

    console.log("current cesta: " + currentCesta);
    localStorage.setItem("cesta", JSON.stringify(currentCesta));
    this.updateStockBorrar(producto);
  }
}

export default new CestaService();
