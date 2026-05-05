const API_BASE_URL = 'http://localhost:3000/api';

export const produtoAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/produtos`);
    if (!response.ok) throw new Error('Erro ao buscar produtos');
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/produtos/${id}`);
    if (!response.ok) throw new Error('Produto não encontrado');
    return response.json();
  },

  create: async (data) => {
    const response = await fetch(`${API_BASE_URL}/produtos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao criar produto');
    return response.json();
  },

  update: async (id, data) => {
    const response = await fetch(`${API_BASE_URL}/produtos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao atualizar produto');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/produtos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao deletar produto');
    return response.json();
  },
};