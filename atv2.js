const rainbow = ['Vermelho', 'Laranja', 'Preto', 'Azul'];

rainbow.forEach((element, index) => {
	console.log(element, index);
});

rainbow.splice(2, 1);
console.log(rainbow);

rainbow.splice(2, 0, 'Amarelo', 'Verde');
console.log(rainbow);

rainbow.forEach((element, index) =>{
     console.log(element, index);
})

rainbow.splice(5, 0, 'Roxo');
console.log(rainbow);
