if(true) {
  let carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro

// vamos usar sempre CONST e LET7
// var vaza o escopo

{
  var carro = 'Fusca';
  //const ano = 2018;
}
console.log(carro); // Carro
//console.log(ano); // erro ano is not defined

// for com let impede que o número vaze

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
//console.log(i); // i is not defined