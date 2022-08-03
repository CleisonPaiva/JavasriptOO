// _ define uma propriedade como privada,não sendo permitido acessa-la diretamente
class Pessoa{
    constructor() {
        this._name
    }

    set name(value) {
        this._name = value.toUpperCase();
    }

   get name() {
       return this._name ;
    }
}

let pessoa =new Pessoa
pessoa.name='Cleison'
console.log(pessoa.name)