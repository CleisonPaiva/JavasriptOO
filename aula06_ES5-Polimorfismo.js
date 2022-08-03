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

    this.showInfo = function () {
        return `Pessoa: ${this.name} ${this.lastName}`
    };
}

function PessoaJuridica(name,lastName,cnpj) {
    Pessoa.call(this,name,lastName)

    this.cnpj = cnpj;

    this.showInfo = function () {
        return `Empresa: ${this.name} ${this.lastName}`
    };
}

var cleison=new PessoaFisica('Cleison','Paiva',132123)
console.log(cleison.showInfo())

var employee=new PessoaJuridica('Rahs','Cia',2551)
console.log(employee.showInfo())