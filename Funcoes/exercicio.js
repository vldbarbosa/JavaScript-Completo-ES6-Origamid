// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor){
    if (!!valor){
        return 'É truthy';
    }
    return 'Não é truthy';
}
console.log(verificaTruthy(1));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}
console.log(`O perímetro do quadrado é ${perimetroQuadrado(5)}`);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}
nomeCompleto('Victor', 'Barbosa');
// Crie uma função que verifica se um número é par
function verificaPar(numero) {
    if(numero % 2 === 0){
        return `${numero} é par`;
    }
    return `${numero} é impar`;
}
console.log(verificaPar(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
    return (typeof dado);
}
console.log(tipoDeDado("ABC"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', () => { console.log('Victor Barbosa') });

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
}

function jaVisitei(paisesVisitados) {
    console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
}
  precisoVisitar(20);
  jaVisitei(20);
