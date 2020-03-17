var nome = 'Victor';
let idade = 20;
const possuiFaculdade = false;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = "Barbosa",
    cidade = "São Paulo";

console.log(sobrenome, cidade);

var semDefinir;

console.log(semDefinir);

//É CASE SENSITIVE

//INVÁLIDO:
//var &nome;
//var function;
//var 1possuiFaculdade;

//VÁLIDO:
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

// Variáveis definidas com var e com let podem ter seus valores modificados.
// Uma Constante não pode ter seu valor modificado.

var time = "São Paulo";
time = "Santos";

console.log(time);