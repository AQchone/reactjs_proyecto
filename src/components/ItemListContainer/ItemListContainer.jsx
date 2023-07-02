import "./ItemListContainer.css";
import ItemList from "../itemlist/ItemList";
import { useEffect, useState } from 'react';
import { PedirDatos } from "../../helpers/pedirdatos";

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true)



  useEffect(() => {
    setLoading(true)
    PedirDatos()
    .then((res) => setProductos(res))
    .catch((err) => console.log(err))
    .finally(()=>setLoading(false))
  }, [])

  return (
    <div className="container my-5">
      {
        loading
        ? <h2>Cargando...</h2>
        : <ItemList items={productos}/>
      }
    </div>
  );
};

export default ItemListContainer;

