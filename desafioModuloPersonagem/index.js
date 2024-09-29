/**
 * crie um modulo ESM personagem.js
 * crie funções para:
 * imprimir um objeto com(nome,poder,vida))
 * exporte o modulo dentro do seu arquivo
 * index.js
 */
import { personagem } from './personagem.js';

const personagem1 = personagem("bob esponja","hamburger",100)

console.log(personagem1);

// CRIE UM MODULO CJS (.cjs)
//IMPORTE AS FUNCÕES (PATH,FS)-> REQUIRE('')
// EXPORTAR PATH E FS
// FINALMENTE IMPORTE-OS AQUI NO INDEX.JS
