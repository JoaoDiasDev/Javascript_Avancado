const { reject } = require("lodash");

function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log("temp");
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!");
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e);
    }
  });
}

funcionarOuNao("Testando...", 0.9)
  .then(console.log)
  .then(
    (v) => consol.log(v),
    (e) => console.log(`Erro Especifico: ${e}`)
  )
  .then(() => console.log("Quase Fim!"))
  .then(() => console.log("Fim!"))
  .catch((e) => console.log(`Erro: ${e}`));
