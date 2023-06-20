import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import BaseComponent from "bootstrap/js/dist/base-component";
import { PedirDatos } from "../../helpers/pedirdatos";


const ItemListContainer = () => {
  const [Productos, setProductos] = useState([]);
  console.log(Productos);

  useEffect(() => {
    PedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2>Item List Container</h2>
      <hr />
      <div className="row">
      {
          Productos.map ((prod) => (
            <div key={prod.id} className="col-3 m-2">
              <h4>{prod.nombre}</h4>
              <img src={prod.img} alt={prod.nombre} />
              <p>{prod.descripcion}</p>
              <p>precio: ${prod.precio}</p>
            </div>
          ))
          
        }
        </div>
    </div>
  );
};

export default ItemListContainer;
