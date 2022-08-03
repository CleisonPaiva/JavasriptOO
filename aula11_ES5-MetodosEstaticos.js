function DateConverter(){

}
DateConverter.ptBr=function (date) {
    return date.split('-').reverse().join('/')

}
var date = DateConverter.ptBr('2022-02-02')
console.log(date)