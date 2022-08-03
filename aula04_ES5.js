//Repetindo muito codigo
function PessoaFisica(name,lastName,cpf){
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;

    this.showInfo = function () {
        return `${this.name} ${this.lastName}`
    };
}

function PessoaJuridica(name,lastName,cnpj){
    this.name = name;
    this.lastName = lastName;
    this.cnpj = cnpj;

    this.showInfo = function () {
        return `${this.name} ${this.lastName}`
    };
}

//***** HERANÇA

function Pessoa() {
    this.name = 'Cleison';
    this.lastName = 'Paiva';

    this.showInfo = function () {
        return `${this.name} ${this.lastName}`
    };
}

//Uma forma de fazer a Chamada
function PessoaFisica(cpf) {
    this.cpf = cpf;
}
//Seta Propriedades Dinamicamente
PessoaFisica.prototype=new Pessoa()
var cleison=new PessoaFisica(132123)
console.log(cleison)

function PessoaJuridica(cnpj) {
    this.cnpj = cnpj;
}
// ****************  Melhor Forma

function Pessoa(name,lastName,) {
    this.name = name;
    this.lastName = lastName;

    this.showInfo = function () {
        return `${this.name} ${this.lastName}`
    };
}

function PessoaFisica(name,lastName,cpf) {
    Pessoa.call(this,name,lastName)

    this.cpf = cpf;
}

function PessoaJuridica(name,lastName,cnpj) {
    Pessoa.call(this,name,lastName)

    this.cnpj = cnpj;
}

var cleison=new PessoaFisica('Cleison','Paiva',132123)
console.log(cleison.showInfo())

var employee=new PessoaJuridica('Rahs','Cia',2551)
console.log(employee.showInfo())