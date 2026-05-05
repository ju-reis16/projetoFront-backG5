import { useState } from "react";
import "./App.css";

function App() {
  const [feriados, setFeriados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function buscarFeriados() {
    setLoading(true);
    setErro("");
    setFeriados([]);

    try {
      const response = await fetch(
        "https://brasilapi.com.br/api/feriados/v1/2026"
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar API");
      }

      const data = await response.json();
      setFeriados(data);
    } catch (error) {
      setErro("Erro ao carregar os dados.");
      setErro(error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>📅 Feriados Nacionais 2026</h1>

      <section className="info">
        <h2> Cliente-Servidor</h2>
        <p>
          O navegador (cliente) faz uma requisição para um servidor usando HTTP.
        </p>
        <p>  
          O servidor responde com dados (JSON), que são exibidos na tela.
        </p>
      </section>

      <button onClick={buscarFeriados} disabled={loading}>
        {loading ? "Carregando..." : "Buscar Feriados"}
      </button>

      {erro && <p className="erro">{erro}</p>}

      {!loading && feriados.length === 0 && !erro && (
        <p className="mensagem">Clique no botão para buscar os feriados.</p>
      )}

      <div className="lista">
        {feriados.map((f, index) => (
          <div key={index} className="card">
            <h3>{f.name}</h3>
            <p><strong>Data:</strong> {f.date}</p>
            <p><strong>Tipo:</strong> {f.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;