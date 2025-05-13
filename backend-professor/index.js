const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

/* ----- Endpoint: Cadastro de Professor ----- */
app.post('/professores', (req, res) => {
  const { nome, email, telefone, idade } = req.body;

  if (!nome || !email || !telefone || !idade) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const query = 'INSERT INTO professores (nome, email, telefone, idade) VALUES (?, ?, ?, ?)';
  db.query(query, [nome, email, telefone, idade], (err, result) => {
    if (err) {
      console.error('Erro ao inserir no banco:', err);
      return res.status(500).json({ error: 'Erro ao cadastrar professor' });
    }

    res.status(201).json({ message: 'Professor cadastrado com sucesso!' });
  });
});

/* ----- Endpoint: Cadastro de Usuário ----- */
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, results) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  });
});

/* ----- Endpoint: Login de Usuário ----- */
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Erro no login:', err);
      return res.status(500).json({ error: 'Erro ao fazer login' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    res.status(200).json({ message: 'Login bem-sucedido', user: results[0] });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});