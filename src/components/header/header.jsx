import "./header.scss"
import logo from "../../assets/react.svg"

const Header = () => {
    return(


<div>
    <header className="header">
        <div className="header_container">
        
        <img src={logo} className="header_logo"></img>
        
        <nav className="header_nav">
            <a href="#" className="header_link1">enlace 1</a>
            <a href="#" className="header_link2">enlace 2</a>
            <a href="#" className="header_link3">enlace 3</a>
        </nav>

        </div>

    </header>
</div>

)

}

export default Header