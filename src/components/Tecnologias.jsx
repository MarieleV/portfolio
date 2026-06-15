export default function Tecnologias() {
  return (
    <section id="tecnologias" className="container py-5">
      <h2>Tecnologias</h2>

      <div className="grid">
        <div className="card">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="card">
          <h3>Backend</h3>
          <p>Node.js, Express, PHP</p>
        </div>

        <div className="card">
          <h3>Banco de Dados</h3>
          <p>MySQL, Workbench</p>
        </div>

        <div className="card">
          <h3>Segurança</h3>
          <p>JWT, CSRF, XSS, Criptografia</p>
        </div>

        <div className="card">
          <h3>Ferramentas</h3>
          <p>Git, GitHub, Gira, Trello</p>
        </div>
      </div>
    </section>
  );
}
