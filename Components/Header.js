import FoodFireLogo from "../Images/Food Fire Logo.png";

const Title = () => (
    <a href="/">
        <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
    </a>
);

function Header() {
    return (
        <>
            <div className="header">
                <Title></Title>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;