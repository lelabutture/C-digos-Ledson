// SET TIMEOUT /SET IRTERVAL
/**
 *FUNÇÃO NATIVA QUE RECEBE ARGUMENTOS
 * CONTROLA DADOS A PARTIR DE UM INTEVALO
 **/
const intervalo1 = setInterval(function () {
  console.log("ola");
}, 200);
//LIMPAR INTERVALO
clearInterval(intervalo1);
const timeOut1 = setTimeout(function () {
  console.log("ola");
}, 200);
//LIMPAR INTERVALO
clearTimeout(timeOut1);
// ESTRUTURA DE DADOS
// ARRAY -> ESTRUTURA DE DADOS INDEXADA
const nomes = ["lucas", "maria", "joao"];
nomes[2]; // jonas noms[33]// undefined]
// OBJETOS LITERAIS-> ESTRUTURA CHAVE/VALOr
const cachorro = {
  patas: 4,
  cor: "caramelo",
  nome: "bob",
  castrado: false,
};
console.log(cachorro);
console.log(cachorro.cor);
Object.keys(cachorro);
Object.values(cachorro);
//FUNÇOẼS -> ESTRUTURA DE DADOS QUE RECEBE ARGUMENTOS
