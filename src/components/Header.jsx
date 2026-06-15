import { useEffect, useRef, useState } from "react";
import StarBackground from "./StarBackground";

export default function Header() {
  const text = "Estudante de Engenharia de Software";
  const [displayText, setDisplayText] = useState("");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let index = 0;
    let isDeleting = false;

    function typeLoop() {
      if (!isDeleting) {
        // digitando
        setDisplayText(text.slice(0, index + 1));
        index++;

        if (index === text.length) {
          setTimeout(() => (isDeleting = true), 1500); // pausa após escrever
        }
      } else {
        // apagando
        setDisplayText(text.slice(0, index - 1));
        index--;

        if (index === 0) {
          isDeleting = false;
        }
      }

      setTimeout(typeLoop, isDeleting ? 50 : 80);
    }

    typeLoop();
  }, []);

  return (
    <header
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        color: "white",
      }}
    >
      <StarBackground />

      <div
        className="container text-center"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 className="display-4 fw-bold mb-3">
          Olá, me chamo <span style={{ color: "#60a5fa" }}>MARIELE</span>
        </h1>

        {/* TYPEWRITER */}
        <p className="lead" style={{ minHeight: "32px", color: "white" }}>
          {displayText}
          <span className="cursor">|</span>
        </p>

        {/* STACK */}
        <p style={{ color: "#93c5fd", fontWeight: 500 }}>
          React • Node.js • Banco de Dados • Segurança
        </p>

        <div className="mt-4">
          <a href="#projetos" className="btn btn-primary me-3">
            Ver Projetos
          </a>
          <a
          href="https://github.com/MarieleV"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light me-2"
          >
          GitHub
          </a>
          <a
          href="https://www.linkedin.com/in/mariele-vieira-8698091b7/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light"
          >
          LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
