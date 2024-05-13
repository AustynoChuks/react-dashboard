import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBell, faUser } from "@fortawesome/free-regular-svg-icons"
import { fa42Group } from "@fortawesome/free-brands-svg-icons"
import Logo from "../img/Moniepoint_Logo.png"
const Header = (props)=>{
    return (
    <div className="main-header">
        <div className="container flex-row">
            <div className="logo-section">
                <img src={Logo} alt="moniepoint logo"/>
            </div>
            <div className="menu-section">
                <ul className="menu flex-row">
                    <li className="menu-item active">
                        <a href="#">Dashboard</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Payment</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Transaction</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Cards</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Invoice</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Insight</a>
                    </li>
                </ul>
            </div>
            <div className="tray-section flex-row align-center">
                <div className="tray-icon">
                    <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className="tray-icon">
                    <FontAwesomeIcon icon={faBell}/>
                </div>
                <div className="tray-icon">
                    |
                </div>
                <div className="tray-icon">
                    <FontAwesomeIcon icon={fa42Group}/>
                </div>
                <div className="tray-icon">
                    <FontAwesomeIcon icon={faUser}/>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Header;