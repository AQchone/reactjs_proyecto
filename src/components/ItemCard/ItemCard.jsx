const ItemCard = ({item}) => {
  return (
        <div className="col-3 m-2">
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre} />
            <p>{item.descripcion}</p>
            <p>precio: ${item.precio}</p>
        </div>
  )
}

export default ItemCard