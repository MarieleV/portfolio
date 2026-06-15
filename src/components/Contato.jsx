export default function Contato() {
  return (
    <footer
      id="contato"
      className="text-white text-center py-5"
      style={{
        background: "linear-gradient(180deg, #020617, #0f172a)",
      }}
    >
      <div className="container">
        <h2 className="mb-4">Contato</h2>

        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:silvamariele797@gmail.com"
            style={{
              color: "#93c5fd",
              textDecoration: "underline",
            }}
          >
            silvamariele797@gmail.com
          </a>
        </p>

        <p
          className="mt-4 mb-0"
          style={{
            color: "#94a3b8",
            fontSize: "0.9rem",
          }}
        >
          GitHub e LinkedIn disponíveis no topo da página
        </p>
      </div>
    </footer>
  );
}
