document.addEventListener("DOMContentLoaded", function(){

});

const canvas = document.getElementById("mycanvas");
canvas.height = 500;
canvas.width = 500;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10,10,150,300);

ctx.beginPath();
ctx.arc(100,100,50,0, 2*Math.PI);
ctx.strokeStyle = 'blue';
ctx.lineWidth = 10;
ctx.stroke();
ctx.fillStyle = 'pink';
ctx.fill();

ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(300, 490);
ctx.lineTo(400, 490);
ctx.closePath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 10;
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();
