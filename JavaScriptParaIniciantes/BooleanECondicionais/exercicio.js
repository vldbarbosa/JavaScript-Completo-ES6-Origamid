// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade = 20;
if (idade > 36){
    console.log('É maior');
} else if ( idade === 36){
    console.log('É igual');
} else {
    console.log('É menor');
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao); // 3
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
if(!!nome){
    console.log("Truthy");
} else {
    console.log("Falsy");
}
var idade = 28;
if(!!idade){
    console.log("Truthy");
} else {
    console.log("Falsy");
}
var possuiDoutorado = false;
if(!!possuiDoutorado){
    console.log("Truthy");
} else {
    console.log("Falsy");
}
var empregoFuturo;
if(!!empregoFuturo){
    console.log("Truthy");
} else {
    console.log("Falsy");
}
var dinheiroNaConta = 0;
if(!!dinheiroNaConta){
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(china > brasil){
    console.log("China tem mais habitantes");
} else {
    console.log("Brasil tem mais habitantes");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // Cão