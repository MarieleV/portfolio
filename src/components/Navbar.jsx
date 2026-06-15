import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-light navbar-scrolled" : "navbar-dark navbar-top"
      }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Seja bem vindo(a)!
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projetos">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tecnologias">Tecnologias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
