import { useState } from 'react'
import Home from './assets/pages/home/Home'
import Produtos from './assets/pages/produto/Produtos'
import Sobre from './assets/pages/sobre/Sobre'
import './App.css'

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home')

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'home':
        return <Home />
      case 'produtos':
        return <Produtos />
      case 'sobre':
        return <Sobre />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>TECH STORE</h1>
          </div>
          <ul className="nav-menu">
            <li>
              <button
                className={`nav-link ${paginaAtual === 'home' ? 'ativo' : ''}`}
                onClick={() => setPaginaAtual('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${paginaAtual === 'produtos' ? 'ativo' : ''}`}
                onClick={() => setPaginaAtual('produtos')}
              >
                Produtos
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${paginaAtual === 'sobre' ? 'ativo' : ''}`}
                onClick={() => setPaginaAtual('sobre')}
              >
                Sobre
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          {renderizarPagina()}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Projeto Final - Gerenciador de Produtos. Desenvolvido por alunas do SENAI.</p>
      </footer>
    </div>
  )
}

export default App