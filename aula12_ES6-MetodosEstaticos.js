class DateConverter {

    static ptBr(date) {
        return date.split('-').reverse().join('/')
    }

    static en(date) {
        return date.split('/').reverse().join('-')
    }
}

let date = DateConverter.ptBr('2022-02-02')
console.log(date)

let date_en = DateConverter.en('03/08/2022')
console.log(date_en)