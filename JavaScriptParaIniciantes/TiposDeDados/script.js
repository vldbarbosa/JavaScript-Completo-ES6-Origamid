//PRIMITIVOS:
var nome = 'Victor'; //String
var idade = 20; //Number
var possuiFaculdade = false; //Boolean
var time; //Undefined
var comida = null; //Null
var simbolo = Symbol(); //Symbol
//NÃO PRIMITIVO:
var novoObjeto = {} //Object

console.log(typeof nome);

var sobrenome = "Barbosa";
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = "Pelé fez mais de " + gols + " gols";
console.log(frase);

var ano = "2020";
var mes = 8;
console.log(ano + mes);

var frase1 = "Esse é o \"melhor\" jogo";
console.log(frase1);

// Template String
console.log(`Pelé fez mais de ${gols} gols`);