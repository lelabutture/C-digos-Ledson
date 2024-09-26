// while é um loop sem pausas

// let n = 0;
// while (n <= 5){
//   console.log(n);
//   n = n + 1;
// }
// setInterval é um loop com pausas
let fps = 0;
setInterval(function () {
  //fps=Math.random(30,60) * 100).toFixed(1)
  fps = Math.round(Math.random(30, 60) * 60);
  console.clear();
  console.log(`fps: ${fps}`);
}, 1000); // 1 segundo em milisegundos

setInterval(function () {
  const relogio = new Date().toLocaleTimeString();
  console.clear();
  console.log(relogio);
}, 1000);
