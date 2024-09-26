//operadores ternario
//são usados para simplificar o processo de tomada de decisão e, eventualmente,substituir o if-else

const idade = 18;

if (idade >= 18){
  console.log("permitida a entrada");
} else {
  console.log("proibido para menores");
}
//com operador ternario
const passe = idade >= 18 ? "permitida a entrada" : "proibida a entrada"
console.log(passe)
