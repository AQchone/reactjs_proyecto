import "./ItemListContainer.css";
import ItemList from "../itemlist/ItemList";
import { useProductos } from '../../components/hooks/useProductos'

const ItemListContainer = () => {
  
const {productos} = useProductos()


  return (
    <div className="container my-5">
      <ItemList items={productos}/>
    </div>
  );
};

export default ItemListContainer;
