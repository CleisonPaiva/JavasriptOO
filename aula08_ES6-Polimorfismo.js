class Conta {
    constructor(numero, titular) {

        this.numero = numero;
        this.titular = titular;
        this.saldo = 0
    }


    deposita(valor) {
        this.saldo += valor
    }

    saque(valor) {
        if (this.saldo > 0 && this.saldo >= valor) {
            this.saldo -= valor
        }else{
           ' Saque não permitido,o valor informado e maior que o saldo disponivel em conta.'
        }
    }

    getSaldo() {
        return this.saldo
    }
}

class ContaCorrente extends Conta {

    constructor(numero, titular) {
        super(numero, titular);
    }
    deposita(valor) {
        this.saldo += (valor-4)
    }

}

class ContaPoupanca extends Conta {
    constructor(numero, titular) {
        super(numero, titular);
    }
}

let cleison = new ContaCorrente(12341, 'Cleison')
console.log(cleison.getSaldo())
cleison.deposita(100)
cleison.saque(50)
cleison.deposita(100)
console.log(cleison.getSaldo())

let ana = new ContaPoupanca(12341, 'Cleison')
console.log(ana.getSaldo())
ana.deposita(100)
ana.saque(50)
ana.deposita(100)
console.log(ana.getSaldo())