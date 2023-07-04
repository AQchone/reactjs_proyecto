import Header from "./components/header/header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import Error404 from "./components/Error/error404";

function App() {
  return (
    <BrowserRouter>
      <Header />

<Routes>


</Routes>


      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Productos/PARAM" element={<ItemListContainer />} />
        <Route path="/Nosotros" element={<Nosotros/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="*" element={< Navigate to={"/"} />} />
        
        

{/* ruta de 404 con un easter egg pero que no funciona como pensaba (tengo que arreglarlo) */}
        {/* <Route path="*" element={<Error404/> }/> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
