const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE estoque (id INT, nome TEXT, qtd INT)');
});

app.use(express.json());

app.post('/api/estoque/cadastrar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;

  db.run('INSERT INTO estoque (id, nome, qtd) VALUES (?, ?, ?)', [id, nome, qtd], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao cadastrar o item no estoque.' });
    }
    res.json({ message: 'Item cadastrado com sucesso.' });
  });
});

app.get('/api/estoque/listar', (req, res) => {
  db.all('SELECT * FROM estoque', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao listar os itens do estoque.' });
    }
    res.json(rows);
  });
});

app.put('/api/estoque/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;

  db.run('UPDATE estoque SET qtd = ? WHERE id = ?', [qtd, id], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao editar a quantidade do item no estoque.' });
    }
    res.json({ message: 'Quantidade do item atualizada com sucesso.' });
  });
});

app.delete('/api/estoque/remover/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM estoque WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao remover o item do estoque.' });
    }
    res.json({ message: 'Item removido do estoque com sucesso.' });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
