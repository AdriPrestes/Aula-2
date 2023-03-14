var nome = "Adriane"; //string
var idade = 23; //number - integer
var peso = 45.7 // number - float
var acordado = true; // boolean

console.log("Olá " + nome);

/*
	== -> Igual
	!= -> Diferente
	>  -> Maior
	<  -> Menor
	>= -> Maior ou igual
	<= -> Menor ou igual
	&& -> And -> E
	|| -> Or  -> Ou
	=== -> Exatamente igual 	-> valor e tipo igual
	!== -> Exatamente diferente	-> valor e tipo diferente
*/
if(acordado == false)
{
	console.log("Acorda aí!");
}

// verificar se a pessoa tem mais de 30 anos e mais de 50 kilos

var idade = 31;
var peso = 55;
if(idade > 30 && peso > 50)
{
	console.log("Você tem ambos os requisitos");
}
else
{
	console.log("Você não possui os requisitos");
}
//

var ini = 0;
for(ini = 0; ini <= 10; ini++)
{
	console.log(ini);
}

for(ini = 10; ini >= 0; ini--)
{
	console.log(ini);
}

var vazio = "";
var zero = 0;
var nada;

if(vazio === zero)
{
	console.log("passou");
}

// estrutura de dados
// vetores ou Arrays

var cidades = ["Curitiba", "Colombo", "Pinhais"];
console.log(cidades[1]);
cidades.push("Araucária");
console.log(cidades);
