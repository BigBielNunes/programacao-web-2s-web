const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const calculadoraController = require('./controllers/calculadoraController');
app.use('/', calculadoraController);

app.listen(3000, () => {
  console.log('Aplicativo de calculadora rodando na porta 3000');
});
