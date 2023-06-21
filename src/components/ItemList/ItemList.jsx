const ItemList = ({items}) => {
  return (
    <div>
      <h2>Productos</h2>
      <hr />
      <div className="row">
        {items.map((prod) => (
          <div key={prod.id} className="col-3 m-2">
            <h4>{prod.nombre}</h4>
            <img src={prod.img} alt={prod.nombre} />
            <p>{prod.descripcion}</p>
            <p>precio: ${prod.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList