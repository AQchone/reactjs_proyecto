import "./ItemListContainer.css";
import ItemList from "../itemlist/ItemList";
import { useEffect, useState } from 'react';
import { PedirDatos } from "../../helpers/pedirdatos";
import { useParams, useSearchParams } from "react-router-dom";


const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
const [SearchParams] = useSearchParams ()
const search = SearchParams.get("search")
  const [loading, setLoading] = useState(true)

const { categoryId } = useParams()


  useEffect(() => {
    setLoading(true)

    PedirDatos()
    .then((res) => {
      if (!categoryId){
        setProductos(res)
      }else{
        setProductos(res.filter((item)=> item.category === categoryId))
      }
      }) 
    .catch((err) => console.log(err))
    .finally(()=>setLoading(false)) 
  }, [categoryId])

const listado = search
?productos.filter(prod=>prod.nombre.includes(search))
:productos

  return (
    <div className="container my-5">
      {
        loading
        ? <h2>Cargando...</h2>
        : <ItemList items={listado}/>
      }
    </div>
  );
};

export default ItemListContainer;

