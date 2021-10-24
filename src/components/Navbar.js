import React from "react";
import {  useSelector } from "react-redux";
import {Link} from "react-router-dom";
function Navbar() {
    const products = useSelector((state) => state);
  
    return (
        <nav className="nav">
            <li className="nav-link" aria-current="page" >
                Counter Products
            </li>
            <li className="nav-link" >
                Total Products: {products.productReducer.length}
            </li>
    
            <Link className="nav-link" to="/add">
                AddProduct
            </Link>
        </nav>
    );
}

export default Navbar;
