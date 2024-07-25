import React from "react"
import { Link } from "react-router-dom"
import "../css/headerStyle.css"

export default function Header() {
    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}