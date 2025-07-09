const $dias = document .getElementById('dias'),
$horas = document.getElementById('horas'),
$minutos = document.getElementById('minutos'),
$segundos = document.getElementById('segundos');

//Fecha a futuro

const countdownDate = new Date('Oct 5, 2024 04:00:00').getTime(); 


let interval = setInterval (function (){
//Obtener fecha actual y milisegundos 

const now = new Date().getTime();

//Obtener las distancias entre ambas fechas

let distance = countdownDate - now;

//Calculos a dias-horas-minutos-segundos
let dias = Math.floor(distance / (1000 * 60 * 60 * 24));
let horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let segundos = Math.floor((distance % (1000 * 60 )) / (1000));

//Escribimos resultados

$dias.innerHTML= dias;
$horas.innerHTML= horas;
$minutos.innerHTML= minutos;
$segundos.innerHTML= ('0' + segundos).slice(-2);
}, 1000);
