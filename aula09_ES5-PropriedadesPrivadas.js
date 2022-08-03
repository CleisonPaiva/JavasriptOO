// _ define uma propriedade como privada,não sendo permitido acessa-la diretamente
function Pessoa(){
    this._name

    this.setName=function (value) {
        this._name = value.toUpperCase();
    }

    this.getName=function () {
       return this._name ;
    }
}

var pessoa =new Pessoa()
pessoa.setName('Cleison')
console.log(pessoa.getName())