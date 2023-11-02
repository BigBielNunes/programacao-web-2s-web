const express = require('express');
const calculadora = require('../calculadora/calculadora');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/calcular', (req, res) => {
  const { numA, numB, operacao } = req.body;
  const a = parseFloat(numA);
  const b = parseFloat(numB);

  let resultado;
  switch (operacao) {
    case '+':
      resultado = calculadora.soma(a, b);
      break;
    case '-':
      resultado = calculadora.subtracao(a, b);
      break;
    case '*':
      resultado = calculadora.multiplicacao(a, b);
      break;
    case '/':
      resultado = calculadora.divisao(a, b);
      break;
  }

  res.render('resultado', { resultado });
});

module.exports = router;
