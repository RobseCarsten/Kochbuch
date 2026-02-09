import type { useState, useEffect } from "react";

type NavbarProps = {
    isActive: string;
    setIsActive: (b: string) => void;
};

function navbar({ isActive, setIsActive }: NavbarProps) {
    return (
        <nav className="navbar">
            <a className="logo" href="index.html">
                <img className="logo-img" src="../pics/home-logo.webp" alt="" />
            </a>
            <ul className="nav-links ">
                <li>
                    <a
                        className="hover:cursor-pointer"
                        onClick={() => setIsActive("cooking")}
                    >
                        Kochen
                    </a>
                    <img
                        className="pan"
                        src="../pics/kochen/pan.png"
                        alt="pan with vegetables"
                    />
                </li>
                <li>
                    <a href="inventar.html">Inventar</a>
                    <img
                        className="stock"
                        src="../pics/inventar/vorrat.png"
                        alt=""
                    />
                </li>
                <li>
                    <a href="suplements.html">Suplements</a>
                    <img
                        className="markt"
                        src="../pics/sups/market.png"
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
