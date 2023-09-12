import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Title = () => (
    <a href="/">
        <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
    </a>
);

function Header() {
    const onlineStatus = useOnlineStatus();
    return (
        <>
            <div className="header">
                <Title></Title>
                <div className="nav-items">
                    <ul>
                        <Link to="/" > <li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="contact"><li>Contact</li></Link>
                        <li>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </li>
                        <li>Online status:{onlineStatus ? "✅" : "🔴"}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;