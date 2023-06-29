import "./ItemListContainer.css";
import ItemList from "../itemlist/ItemList";
import { useProductos } from '../../components/hooks/useProductos'

const ItemListContainer = () => {
  
const {productos, loading} = useProductos()

console.log(loading, productos)

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

