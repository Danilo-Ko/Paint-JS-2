const textInput = document.getElementById("text");
const fileInput = document.getElementById("image-insert");
const eraser = document.getElementById("eraser-mode");
const reset = document.getElementById("reset-mode");
const mode = document.getElementById("mode-change");
const colorOption =Array.from(document.getElementsByClassName("color-option"));
const colorPicker = document.getElementById("color");
const range = document.getElementById("line-size");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext ("2d");

CANVAS_WIDTH  = 800;
CANVAS_HEIGHT  = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = range.value;

isDrawing = false;
isFilling = false;

function onMove (e) {
    if(isDrawing) {
        ctx.lineTo (e.offsetX, e.offsetY);
        ctx.stroke();
    } else {
        ctx.moveTo (e.offsetX, e.offsetY);
    }
}
function startDraw (){
    ctx.beginPath();
    isDrawing = true;
}
function stopDraw (){
    isDrawing = false;
}
function lineWidhtChange (e) {
    ctx.lineWidth = e.target.value;
}
function onColorPicker (e) {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
}
function onColorOption (e) {
    const colorOption = e.target.dataset.color;
    ctx.strokeStyle= colorOption;
    ctx.fillStyle = colorOption;
    colorPicker.value = colorOption;
}
function onModeChange () {
    if(isFilling) {
        isFilling = false;
        mode.innerText = "그리기";
    }else {
        isFilling = true;
        mode.innerText = "채우기";
    }
}
function onFillDraw () {
    if(isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function onResetCanvas () {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraser () {
    ctx.strokeStyle = "white";
}
function onFileChange(e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    };
}
function onTextInput(e) {
    ctx.save();
    if(text !== null){
        const text = textInput.value;
        ctx.lineWidth = 1;
        ctx.fillStyle = "black"
        ctx.fillText(text, e.offsetX, e.offsetY);
        ctx.restore();
    };
}
canvas.addEventListener("dblclick", onTextInput);
canvas.addEventListener ("mousemove", onMove);
canvas.addEventListener ("mousedown", startDraw);
canvas.addEventListener ("click", onFillDraw);
canvas.addEventListener ("mouseup", stopDraw);
canvas.addEventListener ("mouseleave", stopDraw);

range.addEventListener ("change", lineWidhtChange);
colorPicker.addEventListener ("change", onColorPicker);

colorOption.forEach((color) => color.addEventListener("click", onColorOption));
mode.addEventListener ("click", onModeChange);
reset.addEventListener ("click", onResetCanvas);
eraser.addEventListener ("click", onEraser);
fileInput.addEventListener ("change", onFileChange);