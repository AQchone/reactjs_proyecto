import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import BaseComponent from "bootstrap/js/dist/base-component";
import { PedirDatos } from "../../helpers/pedirdatos";
import ItemList from "../itemlist/ItemList";


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
      <ItemList items={Productos}/>
    </div>
  );
};

export default ItemListContainer;
