import { Link } from "react-router-dom";

function navbar() {
    return (
        <nav className="navbar">
            <Link className="logo" to="/">
                <img className="logo-img" src="../pics/home-logo.webp" alt="" />
            </Link>
            <ul className="nav-links ">
                <li>
                    <Link className="hover:cursor-pointer" to="/cooking">
                        Kochen
                    </Link>
                    <img
                        className="pan"
                        src="/pics/kochen/pan.png"
                        alt="pan with vegetables"
                    />
                </li>
                <li>
                    <Link to="/dish">Gerichte</Link>
                    <img
                        className="stock"
                        src="/pics/inventar/vorrat.png"
                        alt=""
                    />
                </li>
                <li>
                    <a href="suplements.html">Suplements</a>
                    <img
                        className="markt"
                        src="/pics/sups/market.png"
                        alt="supermarket"
                    />
                </li>
            </ul>
            <ul className="login">
                <li>
                    <input type="username" placeholder="Mama oder Papa" />
                </li>
            </ul>
        </nav>
    );
}

export default navbar;
