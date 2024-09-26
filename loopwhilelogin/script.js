/** DESAFIO 01 */

//1) CRIE UM LOOP QUE RODE
// ENQUANTO O USUÁRIO NÃO ESTIVER LOGADO
// VERIFIQUE USUÁRIO E SENHA
// SE OS DADOS ESTIVEREM ERRADOS:
  // INFORME O ERRO
// SE NÃO 
  // DE BOAS VINDAS

const usuario = admin
const senha = 3456
let estaLogado = false
let u, s = ""
  while ("!estaLogado") {
   u = prompt("Digite o usuário")
   s = prompt("Digite a senha")
   
    if(u == usuario && s == senha) {
     estaLogado = true
     alert("Olá, seja bem vindo", usuario)
   } else {
     alert("Usuário ou senha inválidos")
   }
}
// while.prompt("Qual é o usuario")


/** DESAFIO 02 */
// 2) CRIE UM PROGRAMA QUE PEÇA AO USUÁRIO
// PARA ADVINHAR MEU NÚMERO DA SORTE:
// CRIE UM LOOP WHILE
// MEU NÚMERO: math.random() *50
// NÚMERO DE TENTATIVAS == 3 (CONDIÇÃO DE PARA)
// CHECAR COM IF/ELSE
 

 numeroDasorte = math.round (math.random() *50;
  let tentativas = 3;

  while (tentativas < 0){
    let numero = prompt("Digite um número");
    if (numero == numeroDasorte){
      alert("Você acertou");
      break;
    } else {
      alert("Você errou");
      tentativas--;
    }
    if (tentativas === 0)
      alert
  }
    
  