const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cadastro_db',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
    return;
  }

  console.log(':white_check_mark: Conectado ao MySQL com sucesso!');

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS professores (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      telefone VARCHAR(20) NOT NULL,
      idade INT NOT NULL
    );
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error(':x: Erro ao criar tabela professores:', err);
    } else {
      if (result.warningStatus === 0) {
        console.log(':white_check_mark: Tabela "professores" criada com sucesso!');
      } else {
        console.log(':information_source: Tabela "professores" já existia, nenhum comando executado.');
      }
    }
  });
});

module.exports = connection;