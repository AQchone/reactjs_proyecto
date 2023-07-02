import { useEffect, useState } from "react";
import { PedirDatos } from "../../helpers/pedirdatos";

export const useProductos = () => {
  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    PedirDatos()
      .then((res) => setProductos(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    productos,
    loading,
  };
};
