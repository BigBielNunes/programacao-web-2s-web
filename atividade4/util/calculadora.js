module.exports = {
    somar: (a, b) => parseFloat(a) + parseFloat(b),
    subtrair: (a, b) => parseFloat(a) - parseFloat(b),
    multiplicar: (a, b) => parseFloat(a) * parseFloat(b),
    dividir: (a, b) => {
      if (parseFloat(b) === 0) {
        throw new Error('Divisão por zero não é permitida.');
      }
      return parseFloat(a) / parseFloat(b);
    },
  };
  