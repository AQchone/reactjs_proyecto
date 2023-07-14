import "./header.scss";
import logo from "../../assets/mdej.svg";
import { Link } from "react-router-dom";
import Buscador from "../SearchBar/Buscador";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header_container">
          <img src={logo} className="header_logo"></img>

          <nav className="header_nav">
            <Link to="/" className="header_link1">inicio</Link>
            <Link to="/Contacto" className="header_link2">Contacto</Link>
            <Link to="/productos/PlayStation5" className="header_link3">PlayStation 5</Link>
            <Link to="/productos/NintendoSwitch" className="header_link3">Nintendo Switch</Link>
            <Link to="/productos/XboxSeriesX" className="header_link3">Xbox Series X</Link>
          </nav>
        </div>
        <Buscador/>
      </header>
    </div>
  );
};
// Juegos Playstation
// Juegos Xbox
// Juegos Nintendo
export default Header;
