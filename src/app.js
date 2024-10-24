let numeros = document.getElementById("number");
let iconosTop = document.querySelector(".top-left");
let iconosBotton = document.querySelector(".bottom-right");

let iconos = ["♦", "♥", "♠", "♣"];
let valores = [
  "A", // 0
  "2", // 1
  "3", // 2
  "4", // 3
  "5", // 4
  "6", // 5
  "7", // 6
  "8", // 7
  "9", // 8
  "10", //9
  "J", // 10
  "Q", // 11
  "K" // 12
];

function randomCard() {
  let randomIcons = Math.floor(Math.random() * iconos.length);
  let randomValue = Math.floor(Math.random() * valores.length);
  numeros.innerHTML = valores[randomValue]; // Pintar mi numero por mi array valores y por la posicion que me genere mi randomValue
  iconosTop.innerHTML = iconos[randomIcons]; // Pintar mi icono superior por mi array valores y por la posicion que me genere mi randomIcons
  iconosBotton.innerHTML = iconos[randomIcons]; // Pintar mi icono superior por mi array valores y por la posicion que me genere mi randomIcons

  if (randomIcons == 0 || randomIcons == 1) {
    numeros.style.color = "red";
    iconosTop.style.color = "red";
    iconosBotton.style.color = "red";
  } else {
    numeros.style.color = "black";
    iconosTop.style.color = "black";
    iconosBotton.style.color = "black";
  }
}
