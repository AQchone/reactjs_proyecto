import { useState } from "react";
import ItemCount from "../itemcounter/itemCount";

const ItemDetail = ({id,nombre,precio,category,descripcion,img,stock}) => {
    const [cantidad,setCantidad] = useState(1)

const handleAgregar = () => {
    const item = {
        
        id, 
        nombre, 
        precio, 
        category, 
        descripcion, 
        img, 
        stock, 
        cantidad
    }
console.log(item)
}

    return (
         <div className="container my-5">
        <h2>{nombre}</h2>
        <img src={img} alt={nombre} ></img>
        <p>{descripcion}</p>
        
        <h4>precio: ${precio}</h4>
        <br />
        <small>Categoria: {category}</small>
        
        <ItemCount
        max={stock}
        cantidad={cantidad}
        setCantidad={setCantidad}
        handleAgregar={handleAgregar}
        />

        </div>
    );


}

export default ItemDetail