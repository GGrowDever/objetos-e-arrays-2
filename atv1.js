const salarios = [5000.0, 5460.5, 3452.0, 6900.0, 7590.1, 8012.99, 1290.0, 15000.0];

function findex(element) {
	return element > 7500;
}
function salario(element) {
	return element > 8000;
}
console.log(salarios.findIndex(findex));
console.log(salarios.filter(salario));
