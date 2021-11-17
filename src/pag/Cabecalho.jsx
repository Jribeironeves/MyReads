import React from "react";
import "../css/cabecalho.css";
import logo from "../images/logo.png";
import { Link} from "react-router-dom";

const Cabecalho = () => {
  return (
    <header className="cabecalho container">
      <div className="cabecalho-container">
        <Link to="/" className="logo_livro">
          <img  src={logo} />
        </Link>
          <h1><Link to="/" className="cabecalho__titulo">My Reads</Link></h1> 
      </div>
      <nav>
        <ul>
        <li><Link to="/Currently" className="menu-item menu-item--entrar">Currently Reading</Link></li>
        <li><Link to="/WantToRead" className="menu-item menu-item--entrar">Want to Read</Link></li>
        <li><Link to="/Read" className="menu-item menu-item--entrar">Read</Link></li>
        </ul>
      </nav>
      <div>
        <Link to="/Search">
        <div className="btn_search">
        </div>
        </Link>
      </div>  
    </header>
  );
};

export default Cabecalho;
