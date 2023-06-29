const ItemCard = ({nombre,img,precio,descripcion,id}) => {
  return (
        <div className="col-3 m-2">
            <h4>{nombre}</h4>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            <p>precio: ${precio}</p>
            <button className="btn btn-primary">Agregar al carrito</button>
        </div>
  )
}

export default ItemCard