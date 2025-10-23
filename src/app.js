/* import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

*/


let pronoun = ['the', 'our', 'we', 'some', 'mine'];
let adj = ['great', 'big', 'curious', 'confident', 'scared'];
let noun = ['jogger', 'racoon', 'unicorn', 'rainbow','love'];

const extension = '.com';

function generateAllDomains () {
console.log("Iniciando la generación de todos los dominios posibles...");

let totalCombinations = 0;

// Iterar sobre primer array
for(let i = 0; i < pronoun.length; i++) {
  const currentPronoun = pronoun[i];
  
  //Iterar sobre segundo array
  for (let j = 0; j < adj.length; j++) {
    const currentAdj = adj[j];

    // Iterar sobre tercer array
    for (let k = 0; k < noun.length; k++) {
      const currentNoun = noun[k];

      // Juntar el dominio
      const domain = currentPronoun + currentAdj + currentNoun + extension;

      // Imprimir en la consola
      console.log(domain);

      totalCombinations ++;

    }
  }
}
console.log(`\nGeneración completada. Total de dominios generados: ${totalCombinations}`);
}

generateAllDomains();



// for ...of

function generateAllDomainsSimple () {
  console.log("Iniciando la generación de dominios...\n");
  const domains = []; 
  for (const pronounItem of pronoun) {
  for (const adjItem of adj) {
    for (const nounItem of noun) {
     /* const domain = pronounItem + adjItem + nounItem + extension;
      console.log(domain); */
      const domain = `${pronounItem}${adjItem}${nounItem}`;
      domains.push(domain);
    }
  }
}
domains.forEach(d => console.log(d));

console.log(`\nGeneración completada. Total: ${domains.length}`);
return domains;
}
generateAllDomainsSimple();
