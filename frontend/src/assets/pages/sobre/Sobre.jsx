import './sobre.css';


export default function Sobre() {
  return (
    <div className="page-sobre">
      <h1><strong>Sobre nossa equipe</strong></h1>
      
      <div className="sobreContent">
        <secitons className="secitons">
          <h2></h2>
          <p>
            Nossa equipe é formada por pessoas dedicadas, com foco em inovação e qualidade no desenvolvimento de soluções digitais. Trabalhamos de forma colaborativa, valorizando a troca de ideias e o aprendizado constante, sempre buscando evoluir tanto individualmente quanto como grupo.
          </p>
          <p>
            Cada integrante contribui com suas habilidades, seja no desenvolvimento, design ou organização do projeto, garantindo que todas as etapas sejam bem estruturadas. Nosso objetivo é criar aplicações eficientes, intuitivas e que realmente atendam às necessidades dos usuários.
          </p>
          <p>
            Mais do que apenas desenvolver um projeto, buscamos crescer juntos, enfrentando desafios, aprendendo com erros e celebrando cada conquista ao longo do caminho.
          </p>
        </secitons>

        <secitons className="secitons">
          <h2>Membros da equipe</h2>
          <div className="tech-list">
            <div className="tech-item">
              <h3>Júlia</h3>
              <ul>
                <li>Organizada e responsável</li>
                <li>Atenta aos detalhes</li>
                <li>Contribui para a qualidade do projeto</li>
                <li>Colabora bem com a equipe</li>
              </ul>
            </div>
            <div className="tech-item">
              <h3>Karen</h3>
              <ul>
                <li>Criativa e proativa</li>
                <li>Traz ideias inovadoras</li>
                <li>Ajuda a tornar o projeto mais dinâmico</li>
                <li>Participativa nas decisões</li>
              </ul>
            </div>
            <div className="tech-item">
              <h3>Laís</h3>
              <ul>
                <li>Dedicada e comprometida</li>
                <li>Busca constante aprendizado</li>
                <li>Tem espírito de equipe</li>
                <li>Contribui para o bom andamento do projeto</li>
              </ul>
            </div>
            <div className="tech-item">
              <h3>Manuela</h3>
              <ul>
                <li>Foco em organização e planejamento</li>
                <li>Boa comunicação com a equipe</li>
                <li>Proativa na resolução de problemas</li>
                <li>Atenta aos detalhes</li>
              </ul>
              </div>

            <div className="tech-item">
              <h3>Sofia</h3>
              <ul>
                <li>Criativa e inovadora</li>
                <li>Aprende rápido novas tecnologias</li>
                <li>Colabora bem em equipe</li>
                <li>Ajuda a manter o ritmo do projeto</li>
              </ul>
            </div>    
          </div>
        </secitons>

        <secitons className="secitons">
          <h2> Funcionalidades</h2>
          <ul className="list">
            <li> Listar todos os produtos</li>
            <li> Criar novos produtos</li>
            <li> Editar produtos existentes</li>
            <li> Deletar produtos</li>
            <li> Interface responsiva</li>
            <li> Validação de formulário</li>
            <li> Sincronização em tempo real com o backend</li>
          </ul>
        </secitons>

        <secitons className="secitons">
          <h2> Estrutura do Projeto</h2>
          <pre className="code-block">
{`frontend/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── assets/
│       ├── api.js
│       └── pages/
│           ├── Home.jsx
│           ├── Produtos.jsx
│           └── Sobre.jsx

backend/
├── appmvc.js
├── package.json
├── src/
│   ├── controllers/
│   │   └── produtoController.js
│   ├── models/
│   │   └── produtoModels.js
│   └── routes/
│       └── produtoRoutes.js`}
          </pre>
        </secitons>

        <secitons className="secitons">
          <h2>🚀 Como Executar</h2>
          <div className="instructions">
            <h3>Backend:</h3>
            <pre className="code-block">
{`cd backend
npm install
npm start`}
            </pre>
            <h3>Frontend:</h3>
            <pre className="code-block">
{`cd frontend
npm install
npm run dev`}
            </pre>
          </div>
        </secitons>

        <secitons className="secitons">
          <h2>📝 Informações Adicionais</h2>
          <p>
            Este projeto demonstra conceitos fundamentais de desenvolvimento web, incluindo:
          </p>
          <ul>
            <li>Criação de componentes React reutilizáveis</li>
            <li>Gerenciamento de estado com hooks (useState, useEffect)</li>
            <li>Comunicação entre cliente e servidor via API REST</li>
            <li>Manipulação do DOM e eventos</li>
            <li>Middleware e roteamento no backend</li>
            <li>CORS e segurança na web</li>
          </ul>
        </secitons>
      </div>
    </div>
  )
}