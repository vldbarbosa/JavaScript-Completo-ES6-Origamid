var nome = 'Victor';

nome.length; // 5
nome.charAt(2) // c
nome.replace('ictor', 'ICTOR'); // VICTOR
nome; //Victor

var altura = 1.81;

altura.toString(); // '1.81'
altura.toFixed(); // 2

var btn = document.querySelector('.btn');

btn.classList.add('azul'); // adiciona a classe azul
console.log(btn.innerText); // Clique
btn.addEventListener('click', () => {
    console.log('Clicou');
})