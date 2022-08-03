function Conta(numero,titular){
    this.numero = numero;
    this.titular = titular;
    this.saldo=0

    this.deposita=function (valor) {
        this.saldo+= valor
    }

    this.getSaldo=function () {
      return this.saldo
    }
}

function ContaCorrente(numero,titular) {
    Conta.call(this,numero,titular)

    this.deposita=function (valor) {
        this.saldo+= (valor - 2)
    }
}

function ContaPoupanca(numero,titular) {
    Conta.call(this,numero,titular)
}

var corrente =new ContaCorrente(123456,'Paiva')
console.log(corrente.getSaldo())
corrente.deposita(12)
console.log(corrente.getSaldo())

var poupanca =new ContaPoupanca(123456,'Paiva')
console.log(poupanca.getSaldo())
poupanca.deposita(12)
console.log(poupanca.getSaldo())