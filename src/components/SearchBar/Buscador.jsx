import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import "./Buscador.css"

const Buscador = () => {
  const [,setSearchParams] = useSearchParams()

  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = ref.current.value;

    if (value === '') {
      setSearchParams({});
      return
    }

    setSearchParams({
      search: value
    });
  };
  const handleReset = () => {
    setSearchParams({})
  }

  return (
    <form className="p-3 formul" onSubmit={handleSubmit}>
      <input ref={ref} className="form-control" type="text" />
      <button type="submit" className="searchbtn btn btn-primary">
        Buscar
      </button>
      <button onClick={handleReset} type="reset" className="searchbtn btn btn-danger">
        X
      </button>
    </form>
  );
};

export default Buscador;
