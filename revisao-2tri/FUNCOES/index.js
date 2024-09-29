// DECLARAR FUNÇÕES
function imprimeOla() {
  console.log("Olá");
}
function olaPessoa(nome) {
  console.log("ola," + nome);
}

//INVOCAR FUNÇÕES
//imprimeOla();
//olaPessoa("Maria");
//olaPessoa("carlos");
let salario = 1000;

// SET INTERVAL
setInterval(function () {
  salario = salario + 100;
  console.clear();
  console.log(`salario: ${salario},00`);
}, 2000);

//CRIE UMA FUNCAO QUE RETORNE UM OBJETO JS
// EXECUTE ESTA FUNCAO A CADA 1S ATRAVES DE UMA
//FUNCAO SET INTERVAL
setInterval(function () {
  salario = salario + Math.random() * 100;
  console.clear()
  console.log(`salario apos taxa R$${salario.toFixed(2)}`)
})