import "./header.scss";
import logo from "../../assets/mdej.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header_container">
          <img src={logo} className="header_logo"></img>

          <nav className="header_nav">
            <Link to="/" className="header_link1">inicio</Link>
            <Link to="/Contacto" className="header_link2">Contacto</Link>
            <Link to="/Nosotros" className="header_link3">Nosotros</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};
// Juegos Playstation
// Juegos Xbox
// Juegos Nintendo
export default Header;
