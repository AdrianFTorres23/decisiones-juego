
// Código base placeholder - el real se integrará con los assets ya proporcionados
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";
ctx.font = "30px Arial";
ctx.fillText("Juego cargado correctamente", 50, 50);
