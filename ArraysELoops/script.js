var videoGames = ['Switch', 'PS4', 'Xbox'];

console.log(videoGames[0]); // Switch
console.log(videoGames[2]); // Xbox

// Métodos e Propriedades de um Array

console.log(videoGames.pop()); // Remove o ultimo item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

// For Loop

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}

// While Loop

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// BREAK
// O loop irá parar caso encontre a palavra Break

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}

// ForEach

videoGames.forEach(item => {
    console.log(item);
});