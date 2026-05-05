const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware CORS
app.use(cors());

// Middleware para JSON
app.use(express.json());
// Importar as rotas
const produtoRoutes = require('./src/routes/produtoRoutes');
// Registrar rotas com prefixo /produtos
// Todas as rotas do arquivo produtoRoutes.js
// ficarão disponíveis em /produtos/...

app.use(express.static('./src/public'));
app.use('/api/produtos', produtoRoutes);

app.listen(PORT, () => {
console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
console.log(`📦 API MVC implementada com sucesso!`);
});