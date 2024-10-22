import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

export default function NavBar() {
  return (
    <>
      <nav className="navbar-cointainer">
        <div>

        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img
                src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.11/mercadolibre/logo__large_plus.png"
                alt="Mercado Libre Logo"
              />
            </Link>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
            />
            <button type="submit">Buscar</button>
          </div>

          
        </div>

        <div className="navbar-links">
          <Link to="/category/:categoryId">Categorías</Link>
          <Link to="#">Ofertas</Link>
          <Link to="#">Historial</Link>
          <Link to="#">Supermercado</Link>
          <Link to="#">Moda</Link>
          <div className="user-icons">
            <Link to="#" className="user-icon">
              Mi cuenta
            </Link>
            <Link to="#" className="user-icon">
              Compras
            </Link>
            <Link to="#" className="user-icon">
              <CartWidget/>
            </Link>
          </div>
        </div>
        <div>
          
        </div>
        </div>
      </nav>
    </>
  );
}
