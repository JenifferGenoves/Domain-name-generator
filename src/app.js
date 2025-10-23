import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoun = ['the', 'our', 'we', 'some', 'mine'];
let adj = ['great', 'big', 'curious', 'confident', 'scared'];
let noun = ['jogger', 'racoon', 'unicorn', 'rainbow','love'];

// Generar index aleatorio

function getRandomIndex (anyArray) {
 return Math.floor(Math.random() * anyArray.length);
}

// Generar domain método 1

function generateDomain () {
 let partsOfDomain = [pronoun, adj, noun];

 // 1.Usar map() para generar un arreglo de palabras seleccionadas al azar
 let selectedWords = partsOfDomain.map(wordArray => {
  let randomIndex = getRandomIndex(wordArray);
  return wordArray[randomIndex];
 });
 // 2. Usar join('') para unir el arreglo de palabras en una sola cadena
 let domain = selectedWords.join('');
 return domain + '.com'
}
/*
// Usando destructuración

function generateDomainAlternative1 () {
  let part1 = pronoun[getRandomIndex(pronoun)];
  let part2 = adj[getRandomIndex(adj)];
  let part3 = noun[getRandomIndex(noun)];

  let domain = `${part1}${part2}${part3}`;

  return domain + '.com';
}
*/

// Mostar en HTML

window.onload = function() {
  //write your code here
  let domainElement = document.getElementById("domain");
   domain.innerHTML = generateDomain();

   document.getElementById("domain_btn").addEventListener('click',() => {
    domainElement.textContent = generateDomain();
   })
};
