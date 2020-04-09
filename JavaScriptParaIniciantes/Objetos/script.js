// OBJETOS
// Conjunto de variáveis e funções
// São chamadas de propriedades e métodos

var pessoa = {
    nome: 'Victor',
    idade: 20,
    profissao: 'Desenvolvedor',
    possuiFaculdade: false, //por enquanto :D
}

console.log(pessoa.nome);
console.log(pessoa.idade);

// MÉTODOS
// Abreviação de area: function() { } para
// area () { } no ES6+

var quadrado = {
    lados: 4,
    area(lado){
        return lado ** 2;
    },
    perimetro(lado){
        return this.lados * lado;
    },
}

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// Funções servem para organizar o 
// código em pequenas partes reutilizáveis

Math.PI; //3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi);

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

var bg = menu.backgroundColor;
console.log(bg);

// hasOwnProperty() verifica se a propriedade ou metódo existe no objeto
console.log(menu.hasOwnProperty('color'));