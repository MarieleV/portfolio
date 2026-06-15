export default function Projetos() {
  return (
    <section id="projetos" className="container py-5">
      <h2 className="text-center mb-5">Projetos</h2>

      <div className="row g-4">

        {/* Projeto 1 */}
      <div className="col-md-4">
      <div className="card h-100 shadow">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          Sistema de Registro de Ponto Eletrônico
        </h5>
      <p className="card-text">
        Sistema corporativo para controle de jornada de trabalho, permitindo
        registro de entrada, pausa e saída, envio de justificativas e
        gerenciamento completo pelo setor de RH, com segurança e controle de
        acesso por perfil.
      </p>
      <p className="mt-auto">
        <strong>Tecnologias:</strong> React, Node.js, Express, MySQL, JWT,
        Tailwind
      </p>
      <a
        href="https://github.com/MarieleV/Sistema-Ponto-RH"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-2"
      >
        Ver no GitHub
      </a>
      </div>
      </div>
      </div>
{/* Projeto 2 */}
<div className="col-md-4">
  <div className="card h-100 shadow">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        JEC Escolinha — Sistema de Gestão para Escola de Futebol
      </h5>

      <p className="card-text">
        Sistema web desenvolvido para gestão de alunos em uma escola de futebol, centralizando dados
        cadastrais e médicos, controle de turmas, jogos, presença, calendário
        de eventos e acesso seguro por perfil de usuário.
      </p>

      <p className="mt-auto">
        <strong>Tecnologias:</strong> HTML, CSS, JavaScript, PHP, MySQL, JWT, GitHub
      </p>

      <a
        href="https://github.com/MarieleV/Gestao-Escola-Futebol"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-2"
      >
        Ver no GitHub
      </a>
    </div>
  </div>
</div>

{/* Projeto 3 */}
<div className="col-md-4">
  <div className="card h-100 shadow">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        Sistema de Reservas de Restaurante
      </h5>

      <p className="card-text">
        Sistema web desenvolvido para permitir reservas online de mesas em
        restaurantes, com controle de disponibilidade, confirmação e
        cancelamento de reservas. A aplicação possui autenticação segura,
        gestão de clientes e reservas, garantindo organização e eficiência
        no atendimento.
      </p>

      <p className="mt-auto">
        <strong>Tecnologias:</strong> JavaScript, Node.js, Express.js, MySQL, JWT
      </p>

      <a
        href="https://github.com/MarieleV/Sistema-Reservas-Restaurante"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-2"
      >
        Ver no GitHub
      </a>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
