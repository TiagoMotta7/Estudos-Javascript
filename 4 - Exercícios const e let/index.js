const nome = "Tiago Motta";
const idade = 32;
const peso = 100;
const altura = 1.76;
let calculoImc = peso / (altura * altura);
let imc = calculoImc.toFixed(2);
let anoNascimento = 1991;

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg.`);
console.log(`Tem ${altura} metros de altura e seu IMC é ${imc} e nasceu em ${anoNascimento}.`)
