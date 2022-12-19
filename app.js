const range = document.getElementById("line-size");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext ("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = range.value;

isDrawing = false;

function onMove (e) {
    if(isDrawing) {
        ctx.lineTo (e.offsetX, e.offsetY);
        ctx.stroke();
    } else {
        ctx.moveTo (e.offsetX, e.offsetY);
    }
}
function starDraw (){
    isDrawing = true;
}
function stopDraw (){
    isDrawing = false;
}
function lineWidhtChange (e) {
    ctx.beginPath();
    ctx.lineWidth = e.target.value;
}
canvas.addEventListener ("mousemove", onMove);
canvas.addEventListener ("mousedown", starDraw);
canvas.addEventListener ("mouseup", stopDraw);
canvas.addEventListener ("mouseleave", stopDraw);

range.addEventListener ("change", lineWidhtChange);