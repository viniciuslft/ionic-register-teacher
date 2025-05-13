const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

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

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});