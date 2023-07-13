import { Link } from "react-router-dom"
const ItemCard = ({nombre,img,precio,descripcion,id}) => {
  return (

<div className="col-xl-3 col-lg-4 col-md-6 mb-4">
  <div className="bg-white rounded shadow-sm">
    <img src={img}  alt={nombre} className="img-fluid card-img-top rounded" />
    <div className="p-4">
      <h5><p className="text-dark">{nombre}</p></h5>
      <p className="small text-muted mb-0">{descripcion}</p>
      <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
        <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold px-3">${precio}</span></p>
        <Link className="btn btn-primary px-3 rounded-pill font-weight-normal" to={`/detail/${id}`}>Ver más</Link>
      </div>
    </div>
  </div>
</div>
  )
}

export default ItemCard