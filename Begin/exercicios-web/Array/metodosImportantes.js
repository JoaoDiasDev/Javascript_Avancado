const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // Remove ultimo elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); // Adciona elemento na ultima posição
console.log(pilotos);

pilotos.shift(); //remove o primeiro!
console.log(pilotos);

pilotos.unshift("Hamilton"); //Adciona no começo do array
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

//remover
pilotos.splice(3, 1); // Retira 1 elemento no indice 3
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //Retorna novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Pega entre este intervalo do array
