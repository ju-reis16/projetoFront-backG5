const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Api-produtos',
  password: 'senai',
  port: 5432,        
});

pool.connect((erro, client, release) => {
  if (erro) {
    console.error('❌ Erro ao conectar ao PostgreSQL:', erro);
  } else {
    console.log('✅ Conectado ao PostgreSQL!');
    release();  
  }
});

module.exports = pool;
