import "../css/header.css";
import logo from "../images/logo_removeBG.png";

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" className="logo" />
        </header>
    )
}

export default Header;