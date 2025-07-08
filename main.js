const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cargar sprite de Mauricio
const personaje = new Image();
personaje.src = "sprite_mauricio.png";

// Mostrar sprite cuando cargue
personaje.onload = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height); // fondo negro
  ctx.drawImage(personaje, canvas.width / 2 - personaje.width / 2, canvas.height / 2 - personaje.height / 2);
};
