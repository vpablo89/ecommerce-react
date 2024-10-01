import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';

export default function NavBar() {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg bg-light m-6">
      <div className="container-fluid">
        <Link className="navbar-brand BrandName" to="/#">OJH SANITARIOS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle ul-link" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Líneas de baño
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item ul-link fs-16" to="/category/andina">Andina</Link></li>
                <li><Link className="dropdown-item ul-link fs-16" to="/category/marina">Marina</Link></li>
                <li><Link className="dropdown-item ul-link fs-16" to="/category/trento">Trento</Link></li>
                <li><Link className="dropdown-item ul-link fs-16" to="/category/varese">Varese</Link></li>
                <li><Link className="dropdown-item ul-link fs-16" to="/category/veneto">Veneto</Link></li>

              </ul>
            </li>

             {/* Lo de abajo es lo próximo a implementar */}
            
            {/* <li className="nav-item">
              <Link className="nav-link active ul-link" aria-current="page" to="/category/">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ul-link" aria-current="page" to="/category/">Sobre Nosotros</Link>
            </li> */}

          </ul>
          <div className="d-flex mr-2" >
            <CartWidget/>
          </div>
        </div>
      </div>
    </nav>
  );
}
