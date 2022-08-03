//Errado ficar criando  varios objetos conforme abaixo - Muito trabalhoso para manter
var cleison={
    name: 'Cleison',
    lastName: 'Paiva',


    fullName: function () {
        return `${this.name} ${this.lastName}`
    }
}

console.log(cleison.fullName())

var Ana={
    name: 'Ana',
    lastName: 'Silva',


    fullName: function () {
        return `${this.name} ${this.lastName}`
    }
}

console.log(Ana.fullName())
