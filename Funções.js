//first class function
//higher order functions

function falarMeuNome() {
    console.log('Meu nome é Thiago')
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Leite Mauricio')
} 
falarMeuNomeCompleto(falarMeuNome)

//function declaration

function nomeDaFuncao() {
    console.log('nomeDaFuncao')
}

//function expression

const nomeDeOutrafuncao = function() {
    console.log('nomeDeOutraFuncao')
}

nomeDaFuncao()
nomeDeOutrafuncao()

//arrow function
function funcao1() {
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}

const thiago = {
    nome: 'Thiago',
    funcao1,
    funcao2
}

thiago.funcao1()
thiago.funcao2()

//closures ou fechamentos

function soma(x) {
    return function (y) {
        return x + y;
    }
}
const somaParcial = soma(10)
console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

//invocação direta, apply, call,  e new

function teste() {
    console.log('teste')
}

teste() //invocando diretamente

//propriedades de calculadora / call backs

function adicao(x, y) {
    return x + y
}

function multiplicacao(x, y) {
    return x * y
}

function calculadora(x, operacao, y) {
    console.log(operacao(x, y))
}

calculadora(10, adicao, 20)
calculadora(2, multiplicacao, 5)

document.getElementById('btn1').addEventListener('click', () =>{
    console.log('Clicou!')
})