import React from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "./cart-icon";
export default function NavBar(props)
{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
            <NavLink className="navbar-brand" to="https://ahmedalaa123.github.io/Cats-Store/">Cate Store</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item " >
                        <NavLink exact className="nav-link" to="/Cats-Store/">Home<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/Cats-Store/Products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/Cats-Store/Cart">Cart</NavLink>
                    </li>
                    
                </ul>
               
            </div>
            <CartIcon/>
        </nav>
    );
}