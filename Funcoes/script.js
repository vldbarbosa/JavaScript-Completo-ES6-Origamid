function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado(4)); // 16 
console.log(areaQuadrado(5)); // 25
console.log(areaQuadrado(2)); // 4

// peso e altura são os parâmetros:
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(53, 1.81)); // 53 e 1.81 são os argumentos

//Parenteses executa a função

function corFavorita(cor) {
    if (cor === 'Azul'){
        return 'Você gosta do céu';
    } else if (cor === 'Verde'){
        return 'Você gosta das árvores';    
    } else {
        return 'Você não gosta de nada';
    }
}

console.log(corFavorita());

// Argumentos podem ser funções

addEventListener('click', () => {
    console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

/**
 * Funções anônimas são aquelas em que
 * o nome da função não é definido, escritas
 * como function() {} ou () => {}
 */

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(53, 1.81); // retorna o imc
console.log(imc2(53, 1.81)); // retorna o imc e undefined

// ESCOPO
// Variáveis e funções definidas em um bloco, não são visíveis fora dele

// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Desenvolvedor';

function dados() {
    var nome = 'Victor',
        idade = 20;
    
    function outrosDados() {
        var endereco = 'São Paulo',
            idade = 21;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados());

// HOISTING
// Antes de executar uma função, o JS 'move'
// todas as funções declaradas para a memória