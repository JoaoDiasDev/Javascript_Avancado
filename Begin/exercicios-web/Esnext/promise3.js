const { resolve } = require("path");

function gerarNumerosEntre(min, max) {
  if (min > max) {
    [max, min] = [(min, max)];
    const [x, y, z] = a;
  }
  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator);
    resolve(aleatorio);
  });
}

gerarNumerosEntre(10, 30)
  .then((num) => num * 10)
  .then((numX10) => `O número gerado foi ${numX10}`)
  .then(console.log);
