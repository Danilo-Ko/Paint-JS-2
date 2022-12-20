const colorOption =Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-size");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;

function onMove (e){
    if(isPainting) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        return;
    }else {
        ctx.moveTo(e.offsetX, e.offsetY);
    }
}
function startDraw (){
    ctx.beginPath();
    isPainting = true;
}
function stopDraw (){
    isPainting = false;
}
function lineWidthChange (e) {
    ctx.lineWidth=e.target.value;
}
function onColorPicker (e) {
    ctx.fillRect=e.target.value;
    ctx.strokeStyle=e.target.value;
    ctx.fillStyle = color;
}
function colorOptionChange (e) {
    const colorChoice = e.target.dataset.color;
    ctx.fillRect=colorChoice;
    ctx.strokeStyle=colorChoice;
    color.value = colorChoice;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

lineWidth.addEventListener("change", lineWidthChange);
color.addEventListener("change", onColorPicker);

colorOption.forEach((color) => color.addEventListener("click", colorOptionChange));