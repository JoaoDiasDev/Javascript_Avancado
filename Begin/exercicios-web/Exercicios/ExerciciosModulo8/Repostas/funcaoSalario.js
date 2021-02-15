const calcularSalario = function (salarioHora, horasTrabalhadas) {
  resultado = salarioHora * horasTrabalhadas;
  salario = console.log(`Salário igual a R$ ${resultado}.`);
  return salario;
};

calcularSalario(150, 40.5);
