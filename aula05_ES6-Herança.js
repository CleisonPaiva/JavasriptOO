class Pessoa {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    showInfo() {
        return `${this.name} ${this.lastName}`
    };
}

class PessoaFisica extends Pessoa{
    constructor(name, lastName,cpf) {
        super(name, lastName);
        this.cpf = cpf;
    }
}

let cleison = new PessoaFisica('Cleison', 'Paiva',123123)
console.log(cleison.showInfo())


class PessoaJuridica extends Pessoa{
    constructor(name, lastName,cnpj) {
        super(name, lastName);
        this.cnpj = cnpj;
    }

    setCnpj(cnpj) {
        this.cnpj=cnpj
    };

    getCnpj() {
        return this.cnpj
    };

}

let empresa = new PessoaJuridica('EmpresaX', 'Teste',54565456)
console.log(empresa.showInfo())
empresa.setCnpj(987987)
console.log(empresa.getCnpj())