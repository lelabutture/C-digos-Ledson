
const pessoas = [
  { nome: "Pamela", sexo: "F" },
  { nome: "João", sexo: "M" },
  { nome: "Rafaela", sexo: "F" },
  { nome: "Jessica", sexo: "F" },
  { nome: "Roberto", sexo: "M" },

]
//exemplo para achar um nome
//console.log(pessoas[2].nome)
//console.log(pessoas[2].sexo)
const meninas = [];
const meninos = [];

function filtroPessoas (arrPessoas){
     if(typeof arrPessoas == "object"){// checa se é um objeto ou um array
          for (pessoa of arrPessoas){// itera sobre cada item de pessoas
               pessoa.sexo == "F" // checa a propriedade "SEXO"
                    ?meninas.push(pessoa.nome) //CASO "F"
     
                    :meninos.push(pessoa.nome)// CASO "M"

               }
          }else{
          console.error(arrPessoas);// SENÃO IMPRIME UM ERRO
     }
}
filtroPessoas(pessoas); // FUNÇÃO PARA REAPROVEITAMENTO DE CÓDIGO


console.log("----meninas----");
console.log(meninas);
console.log("----meninos----");
console.log(meninos);

