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
        mode.innerText = "Draw";
    }else {
        isFilling = true;
        mode.innerText = "Fill";
    }
}
function onFillDraw () {
    if(isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

canvas.addEventListener ("mousemove", onMove);
canvas.addEventListener ("mousedown", startDraw);
canvas.addEventListener ("click", onFillDraw);
canvas.addEventListener ("mouseup", stopDraw);
canvas.addEventListener ("mouseleave", stopDraw);

range.addEventListener ("change", lineWidhtChange);
colorPicker.addEventListener ("change", onColorPicker);

colorOption.forEach((color) => color.addEventListener("click", onColorOption));
mode.addEventListener ("click", onModeChange);