import { useEffect, useState } from "react";
import { PedirDatos } from "../../helpers/pedirdatos";

export const useProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    PedirDatos()
    .then((res) => setProductos(res))
    .catch((err) => console.log(err))
  }, [])

  return {
    productos
  }
}
