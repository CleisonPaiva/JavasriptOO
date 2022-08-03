//Responsabilidade Centralizada

function Pessoa(name,lastName){
    // console.log('Sou o construtor...')
    this.name = name;
    this.lastName = lastName;

    this.fullName = function () {
        return `${this.name} ${this.lastName}`
    };
}

console.log(new Pessoa)

//Possiveis Formas de Retorno
var cleison =new Pessoa('Cleison','Paiva')
console.log(cleison.fullName())

// OU
console.log(new Pessoa('Cleison','Paiva').fullName())

//Instanciando o objeto para outras pessoas
var ana =new Pessoa('Ana','Silva')
console.log(ana.fullName())