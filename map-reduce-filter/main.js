// retorne números maiores que 10


const numeros = [1, 5, 10, 20, 15, 2, 25, 30, 17, 6];

function callbackFilter(valor, indice, array) {
	if (valor > 10){
  return true
} else {
return false;
}
}

function returnFilter(valor, indice, array) {
	return valor > 20
}

const numerosFiltrados = numeros.filter(callbackFilter);
const outrosNumerosFiltrados = numeros.filter(returnFilter);
console.log(numerosFiltrados);
console.log(outrosNumerosFiltrados);


// retorne as pessoas que tem o nome com 5 letras ou mais
// retorna as pessoas com mais de 60 anos
// retorna o nome que termina com a letra A

const pessoas = [
{ nome: 'Luiz', idade: 62},
{ nome: 'Maria', idade: 62},
{ nome: 'Fatima', idade: 68},
{ nome: 'Jose', idade: 65},
{ nome: 'Saulo', idade: 39},
{ nome: 'Erica', idade: 39},
];

const pessoasNomeGrande = pessoas.filter(function(obj) {
	return obj.nome.length >= 5;
});
const pessoasExperientes = pessoas.filter(function(obj) {
	return obj.idade >= 60;
});
const retornarNomeLetraA = pessoas.filter(function(obj) {
	return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasNomeGrande);
console.log(pessoasExperientes);
console.log(retornarNomeLetraA);

// Dobre os números

const numerosDobrados = numeros.map((valores) => {
	return 2 * valores;
});

console.log(numerosDobrados);

// retorne apenas o nome das pessoas

const nomePessoas = pessoas.map((obj) => {
	return obj.nome;
});

console.log(nomePessoas);


// adicione uma chave id nos objetos pessoas

const comIds = pessoas.map((obj, indice) => {
	obj.id = indice + 1;
  return obj;
});
console.log(comIds);

// Some todos os números (reduce)

const total = numeros.reduce((acumulador, valor, indice, array) => {
	acumulador += valor;
  console.log(acumulador, valor);
  return acumulador;
  
}, 0);

// Retorne todos os números pares (filter)

const totalPares = numeros.reduce((acumulador, valor, indice, array) => {
	//acumulador += valor;
  if(valor % 2 == 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(totalPares);

// Retorne todos os números divisores de 5 (filter)

const divisorCinco = numeros.reduce((acumulador, valor, indice, array) => {
	//acumulador += valor;
  if(valor % 5 == 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(divisorCinco);

// Retorne a pessoa mais velha

const maisVelha = pessoas.reduce((acumulador, valor) => {
	if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);

// Retorne a pessoa que tem o nome Maior

const nomeMaior = pessoas.reduce((acumulador, valor) => {
	if(acumulador.nome.length > valor.nome.length) return acumulador;
  return valor;
});
console.log(nomeMaior);

// Retorne os números pares e dobrar o valor deles ao mesmo tempo (reduce, map)

const totalParesDobrado = numeros.filter((acumulador, valor, indice, array) => {
	//acumulador += valor;
  return valor % 2 === 0;
}).map((valor) => {
	return valor * 2;
});
console.log(totalParesDobrado);


// Retorne os números pares e dobrar o valor deles ao mesmo tempo e some todos (reduce, map)

const totalParesDobradoSomado = numeros.filter((acumulador, valor, indice, array) => {
	//acumulador += valor;
  return valor % 2 === 0;
}).map((valor) => {
	return valor * 2;
}).reduce((ac, valor) => {
	return ac + valor;
})
console.log(totalParesDobradoSomado);

// forEach

const a1 = [1, 3, 5, 7, 9];
a1.forEach((valor, indice, array) => {
	console.log(array[indice]);
})