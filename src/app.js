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

// Generar domain

function generateDomain () {
  // 1. Agrupar arrays
  let partsOfDomain = [pronoun, adj, noun];
  // 2. Iniciar la excusa
  let domain = "";
  // 3. Itera 4 veces (una por cada array)
  for(let i = 0; i < partsOfDomain.length; i++) {
  // 4. Obtiene un índice al azar para el array actual
    let randomIndex = getRandomIndex(partsOfDomain[i]);
  // 5. Agrega la palabra seleccionad 
    domain += partsOfDomain[i][randomIndex];
  
  }
    return domain + ".com";
}


// Mostar en HTML

window.onload = function() {
  //write your code here
  let domainElement = document.getElementById("domain");
   domain.innerHTML = generateDomain();

   document.getElementById("domain_btn").addEventListener('click',() => {
    domainElement.textContent = generateDomain();
   })
};
