class Pessoa {
    // constructor(){
    //    console.log('Sou o construtor...')
    // }

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;

    }

    fullName() {
        return `${this.name} ${this.lastName}`
    };
}

// console.log(new Pessoa)

let cleison = new Pessoa('Cleison', 'Paiva')
console.log(cleison.fullName())