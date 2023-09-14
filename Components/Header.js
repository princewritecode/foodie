import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Title = () => (
    <a href="/">
        <img className="w-56" src={FoodFireLogo} alt="Food Fire Logo" />
    </a>
);

function Header() {
    const onlineStatus = useOnlineStatus();
    return (
        <div>
            <div className="flex justify-between shadow-lg sm:bg-yellow">
                <Title></Title>
                <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                        <li className="px-4"> <Link to="/" > Home</Link></li>
                        <li className="px-4"><Link to="/about">About</Link></li>
                        <li className="px-4"><Link to="contact">Contact</Link></li>
                        <li className="px-4">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </li>
                        <li>Online status:{onlineStatus ? "✅" : "🔴"}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;