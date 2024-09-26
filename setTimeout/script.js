// set interval executa a cada x milisegundos
// let n = 0;
// setInterval(function(){
//     console.clear()  
//     console.log(n)
//   n++
// }, 1000)


// clearInterval()
//set timeout executa após

// set timeOut - executa após x 
 // setTimeout(function(){
 // console.log('executou')
 // }, 5000)

// const intervalo = setInterval(function(){
//     console.clear()
//   console.log(`contador: ${n}`)
//   n++
// }, 1000)

// setTimeout(function(){
//   clearInterval(intervalo)
//   // redirecionar para outra pagina
//   location.href = "https://www.google.com.br"
// }, 5000)

// clearInterval(intervalo)
/** A PARTIR DOS CONCEITOS, RESOLVA: 
 *A) Crie uma função setIntervall que receba uma função e um tempo de 3s
 *B) Dentro dela imprima um números de 1 a 10
 *C) Após percorridos 8s interrompa com setTimeout
 */

// GERAR OS NUM. ALEATORIO DE 3 EM 3SEGUNDOS
const intervalo2 = setInterval(function(){
  let num = Math.random() * 10
  console.log(num)
}, 3000)

//CRIAR UM SET TIMEOUT PARA O INTERVALO
setTimeout(function(){
  clearInterval(intervalo2)
  location.href = "https://www.google.com.br"
},8000)