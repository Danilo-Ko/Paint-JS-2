const textInput = document.getElementById("text");
const saveCanvas = document.getElementById("save");
const fileBtn = document.getElementById("file");
const eraser = document.getElementById("eraser-mode");
const reset = document.getElementById("reset-mode");
const mode = document.getElementById("mode-change");
const colorOption =Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-size");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

CANVAS_WIDTH = 800;
CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

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
    ctx.fillStyle=e.target.value;
    ctx.strokeStyle=e.target.value;
    ctx.fillStyle = color;
}
function colorOptionChange (e) {
    const colorChoice = e.target.dataset.color;
    ctx.fillStyle=colorChoice;
    ctx.strokeStyle=colorChoice;
    color.value = colorChoice;
}
function modeChange () {
    if(isFilling){
        isFilling = false;
        mode.innerText = "그리기";
    }else {
        isFilling = true;
        mode.innerText = "채우기";
    };
}
function fillCanvas (){
    if(isFilling){
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function resetCanvas () {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function eraserFunction () {
    ctx.strokeStyle = "white";
}
function fileInsert (e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileBtn.value = null;
    };
}
function saveFunction (e) {
    const url =canvas.toDataURL();
    const a =document.createElement ("a");
    a.href = url;
    a.download ="Drawing.png";
    a.click();
}
function textInputFunction (e) {
    ctx.save();
    if (text !== null){
        const text = textInput.value;
        ctx.fillText(text, e.offsetX, e.offsetY);
    };
    ctx.restore();
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("click", fillCanvas);
canvas.addEventListener("dblclick", textInputFunction);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

lineWidth.addEventListener("change", lineWidthChange);
color.addEventListener("change", onColorPicker);

colorOption.forEach((color) => color.addEventListener("click", colorOptionChange));
mode.addEventListener("click", modeChange);
reset.addEventListener("click", resetCanvas);
fileBtn.addEventListener("change", fileInsert);
saveCanvas.addEventListener("click", saveFunction);