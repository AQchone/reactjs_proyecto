
import { useEffect, useState } from 'react';
import { PedirDatos } from "../../helpers/pedirdatos";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/itemDetail';

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState(null);

  const [loading, setLoading] = useState(true)

const { itemId } = useParams()


  useEffect(() => {
    setLoading(true)

    PedirDatos()
    .then((res) => {
    setItem(res.find((prod)=> prod.id === Number(itemId)))
      })
    .catch((err) => console.log(err))
    .finally(()=>setLoading(false))
  }, [itemId])

  return (
    <div className="container my-5">
{
    loading
    ? <h2>Cargando...</h2>
    :<ItemDetail {...item}/>
}
    </div>
  );
};

export default ItemDetailContainer;

