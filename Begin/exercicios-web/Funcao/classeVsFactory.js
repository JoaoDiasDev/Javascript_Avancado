//Forma com problemas de escopo devido ao this variar
// Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa("João");
p1.falar();

// Melhor forma
// Factory
const criarPessoa = (nome) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`),
    };
};

const p2 = criarPessoa("João");
p2.falar();