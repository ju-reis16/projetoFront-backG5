import { useState, useEffect } from 'react'
import { produtoAPI } from '../../services/api'
import './produto.css'

export default function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)
  const [sucesso, setSucesso] = useState(null)
  const [mostraForm, setMostraForm] = useState(false)
  const [editando, setEditando] = useState(null)
  const [errosForm, setErrosForm] = useState({})
  const [salvando, setSalvando] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    estoque: '',
    categoria: '',
  })

  useEffect(() => {
    carregarProdutos()
  }, [])

  // Limpar mensagens de sucesso/erro após 5 segundos
  useEffect(() => {
    if (sucesso) {
      const timer = setTimeout(() => setSucesso(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [sucesso])

  useEffect(() => {
    if (erro) {
      const timer = setTimeout(() => setErro(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [erro])

  const carregarProdutos = async () => {
    try {
      setLoading(true)
      setErro(null)
      const dados = await produtoAPI.getAll()
      setProdutos(dados)
    } catch (e) {
      setErro('❌ Erro ao carregar produtos: ' + e.message)
      setProdutos([])
    } finally {
      setLoading(false)
    }
  }

  // Validar formulário
  const validarForm = () => {
    const erros = {}

    if (!formData.nome.trim()) {
      erros.nome = 'Nome é obrigatório'
    } else if (formData.nome.length < 3) {
      erros.nome = 'Nome deve ter pelo menos 3 caracteres'
    }

    if (!formData.categoria.trim()) {
      erros.categoria = 'Categoria é obrigatória'
    }

    if (!formData.preco) {
      erros.preco = 'Preço é obrigatório'
    } else if (parseFloat(formData.preco) <= 0) {
      erros.preco = 'Preço deve ser maior que 0'
    }

    if (!formData.estoque) {
      erros.estoque = 'Estoque é obrigatório'
    } else if (parseInt(formData.estoque) < 0) {
      erros.estoque = 'Estoque não pode ser negativo'
    }

    setErrosForm(erros)
    return Object.keys(erros).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    if (errosForm[name]) {
      setErrosForm(prev => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validarForm()) {
      setErro('❌ Preencha todos os campos corretamente')
      return
    }

    try {
      setSalvando(true)
      setErro(null)

      if (editando) {
        await produtoAPI.update(editando.id, formData)
        setSucesso('✅ Produto atualizado com sucesso!')
      } else {
        await produtoAPI.create(formData)
        setSucesso('✅ Produto criado com sucesso!')
      }

      await carregarProdutos()
      fecharForm()
    } catch (e) {
      setErro('Erro ao salvar: ' + e.message)
    } finally {
      setSalvando(false)
    }
  }

  const handleEditar = (produto) => {
    setEditando(produto)
    setFormData({
      nome: produto.nome,
      preco: produto.preco,
      estoque: produto.estoque,
      categoria: produto.categoria,
    })
    setErrosForm({})
    setMostraForm(true)
  }

  const handleDeletar = async (id) => {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      try {
        setErro(null)
        await produtoAPI.delete(id)
        setSucesso('✅ Produto deletado com sucesso!')
        await carregarProdutos()
      } catch (e) {
        setErro('Erro ao deletar: ' + e.message)
      }
    }
  }

  const fecharForm = () => {
    setMostraForm(false)
    setEditando(null)
    setFormData({ nome: '', preco: '', estoque: '', categoria: '' })
    setErrosForm({})
  }

  return (
    <div className="page-produtos">
      <h1> <strong>Gerenciador de Produtos</strong></h1>

      {/* Alerta de Sucesso */}
      {sucesso && (
        <div className="alerta sucesso">
          {sucesso}
          <button className="btn-fechar-alerta" onClick={() => setSucesso(null)}>×</button>
        </div>
      )}

      {/* Alerta de Erro */}
      {erro && (
        <div className="alerta erro">
          {erro}
          <button className="btn-fechar-alerta" onClick={() => setErro(null)}>×</button>
        </div>
      )}

      <button className="btn-novo" onClick={() => setMostraForm(true)}>
        ➕ Novo Produto
      </button>

      {/* Modal do Formulário */}
      {mostraForm && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editando ? 'Editar Produto' : '➕ Novo Produto'}</h2>
              <button className="btn-fechar" onClick={fecharForm}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Campo Nome */}
              <div className="form-group">
                <label>Nome *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Ex: Notebook"
                  className={errosForm.nome ? 'input-erro' : ''}
                />
                {errosForm.nome && <span className="erro-campo">{errosForm.nome}</span>}
              </div>

              {/* Campo Categoria */}
              <div className="form-group">
                <label>Categoria *</label>
                <input
                  type="text"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  placeholder="Ex: Informática"
                  className={errosForm.categoria ? 'input-erro' : ''}
                />
                {errosForm.categoria && <span className="erro-campo">{errosForm.categoria}</span>}
              </div>

              {/* Campos Preço e Estoque */}
              <div className="form-row">
                <div className="form-group">
                  <label>Preço (R$) *</label>
                  <input
                    type="number"
                    name="preco"
                    value={formData.preco}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className={errosForm.preco ? 'input-erro' : ''}
                  />
                  {errosForm.preco && <span className="erro-campo">{errosForm.preco}</span>}
                </div>

                <div className="form-group">
                  <label>Estoque *</label>
                  <input
                    type="number"
                    name="estoque"
                    value={formData.estoque}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                    className={errosForm.estoque ? 'input-erro' : ''}
                  />
                  {errosForm.estoque && <span className="erro-campo">{errosForm.estoque}</span>}
                </div>
              </div>

              {/* Botões */}
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn-salvar"
                  disabled={salvando}
                >
                  {salvando ? 'Salvando...' : (editando ? 'Atualizar' : '➕ Criar')}
                </button>
                <button 
                  type="button" 
                  className="btn-cancelar" 
                  onClick={fecharForm}
                  disabled={salvando}
                >
                   Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Estado de Carregamento */}
      {loading && (
        <div className="estado-vazio">
          <div className="spinner"></div>
          <p> Carregando produtos...</p>
        </div>
      )}

      {/* Estado Vazio */}
      {!loading && produtos.length === 0 && (
        <div className="estado-vazio">
          <p>Nenhum produto cadastrado</p>
          <p className="subtexto">Clique em "Novo Produto" para começar!</p>
        </div>
      )}

      {/* Lista de Produtos em Cards */}
      {!loading && produtos.length > 0 && (
        <div className="produtos-grid">
          {produtos.map((produto) => (
            <div key={produto.id} className="produto-card">
              <div className="card-header">
                <h3>{produto.nome}</h3>
                <span className="id-badge">ID: {produto.id}</span>
              </div>

              <div className="card-body">
                <div className="card-info">
                  <p><strong>Categoria:</strong> {produto.categoria}</p>
                  <p><strong>Preço:</strong> <span className="preco">R$ {Number(produto.preco).toFixed(2)}</span></p>
                  <p><strong>Estoque:</strong> <span className={`estoque ${produto.estoque === 0 ? 'zero' : produto.estoque < 10 ? 'baixo' : 'ok'}`}>{produto.estoque} unidades</span></p>
                </div>
              </div>

              <div className="card-footer">
                <button 
                  className="btn-editar" 
                  onClick={() => handleEditar(produto)}
                  title="Editar produto"
                >
                   Editar
                </button>
                <button 
                  className="btn-deletar" 
                  onClick={() => handleDeletar(produto.id)}
                  title="Deletar produto"
                >
                   Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
