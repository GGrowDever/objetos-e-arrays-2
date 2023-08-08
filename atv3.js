let pessoas = [];
do {
	let nome = prompt('Digite o nome da pessoa:');
	let idade = parseInt(prompt('Digite a idade da pessoa:'));
	let trabalhando = prompt('A pessoa está trabalhando? (Sim/Não)').toLowerCase();

	if (trabalhando === 'sim') {
		let salario = parseFloat(prompt('Digite o salário da pessoa:'));

		let pessoa = {
			nome: nome,
			idade: idade,
			trabalhando: true,
			salario: salario,
		};
		pessoas.push(pessoa);
	} else {
		let pessoa = {
			nome: nome,
			idade: idade,
			trabalhando: false,
		};
		pessoas.push(pessoa);
	}
	let continuar = prompt('Deseja continuar cadastrando? (Sim/Não)').toLowerCase();

	if (continuar !== 'sim') {
		break;
	}
} while (true);

let desempregadas = [];
let salarioMenor2500 = [];
let salarioMaior2500 = [];

for (let pessoa of pessoas) {
	if (!pessoa.trabalhando) {
		desempregadas.push(pessoa);
	} else if (pessoa.salario < 2500) {
		salarioMenor2500.push(pessoa);
	} else {
		salarioMaior2500.push(pessoa);
	}
}
console.log('Pessoas desempregadas:');
for (let pessoa of desempregadas) {
	console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}
console.log('Pessoas empregadas com salários menores que 2500:');
for (let pessoa of salarioMenor2500) {
	console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
}
console.log('Pessoas empregadas com salários maiores que 2500:');
for (let pessoa of salarioMaior2500) {
	console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
}
