import "./header.scss";
import logo from "../../assets/mdej.svg";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header_container">
          <img src={logo} className="header_logo"></img>

          <nav className="header_nav">
            <a href="#" className="header_link1">
              Juegos Playstation
            </a>
            <a href="#" className="header_link2">
              Juegos Xbox
            </a>
            <a href="#" className="header_link3">
              Juegos Nintendo
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
