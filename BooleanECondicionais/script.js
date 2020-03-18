var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado){
    console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}

var nome = 'Victor';

if (nome){
    console.log(nome);
} else {
    console.log('Nome não existe');
}

// Retorna falso:
// if(false)
// if(0) ou -0
// if(NaN)
// if(null)
// if(undefined)
// if ('') ou "" ou ``

// True:
// if(true)
// if(1)
// if(' ')
// if('Victor')
// if(-5)
// if({})

if(!possuiGraduacao){
    console.log("Não possui graduação");
}

//Operadores de comparação
// 10 > 5 true
// 5 > 10 false
// 20 < 10 false
// 10 <= 10 true
// 10 >= 11 false

// 10 == '10' true
// 10 == 10 true
// 10 === 10 false
// 10 === 10 true
// 10 != 15 true
// 10 != '10' false
// 10 !== '10' true

//Operador lógico &&
// true && true // true
// true && false // false
// false && true // false
// 'Gato' && 'Cão' // 'Cão'
// (5 - 5) && (5 + 5) // 0
// 'Gato' && false // false
// (5 >= 5) && (3 < 6) // true

if((5-5)&&(5+5)){
    console.log('verdadeiro');
} else {
    console.log('falso');
}

// Operador lógico ||
// true || true //true
// true || false //true
// false || true // true
// 'Gato' || 'Cão' // 'Gato'
// (5 - 5) || (5 + 5) // 10
// 'Gato' || false // 'Gato'
// (5 >= 5) || (3 < 6) // true

var condicional = (5 - 5) || (5 + 5) || (10 - 5);
if(condicional){
    console.log(condicional);
} else {
    console.log("Falso");
}

// SWITCH

var corFavorita = 'Azul';
switch(corFavorita){
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para as rosas.');
        break;
    case 'Amarelo': 
        console.log('Olhe para o sol.');
        break;
    default:
        console.log('Feche os olhos');
}