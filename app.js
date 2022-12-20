@@ -1,26 +1,33 @@
const colorPaint = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;
let isPainting = false;

function onMove (event){
function onMove (e){
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
    ctx.moveTo(e.offsetX, e.offsetY);
}
function onMouseDown (){
    isPainting = true;
}
function onMouseUp (){
    isPainting = false;
}
function onColorPaint (e) {
       ctx.lineTo(e.offsetX, e.offsetY);
    ctx.fillStyle = color;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);

colorPaint.addEventListener("change", onColorPaint);