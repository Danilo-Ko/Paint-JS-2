const fileInput = document.getElementById("file");
const eraserFuntion = document.getElementById("eraser");
const resetOption = document.getElementById("reset");
const modeChange = document.getElementById("mode-change");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color-input");
const lineWidth = document.getElementById("line-size");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

CANVAS_WIDTH = 800;
CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
isFainting = false;
isFilling = false;

function onMove (e) {
    if(isFainting){
        ctx.lineTo (e.offsetX, e.offsetY);
        ctx.stroke();
        return;
    } else {
        ctx.moveTo (e.offsetX, e.offsetY);
    }
}
function startDraw () {
    ctx.beginPath();
    isFainting = true;
}
function stopDraw () {
    isFainting = false;
}
function lineWidthChange (e) {
    ctx.lineWidth = e.target.value;
}
function colorPicker (e) {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
}
function onColorOption (e) {
    const colorValue = e.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}
function onModeChange () {
    if(isFilling) {
        isFilling = false;
        modeChange.innerText = "그리기";
    } else {
        isFilling = true;
        modeChange.innerText = "채우기";
    }
}
function fillRect () {
    if(isFilling){
        ctx.fillRect (0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function onReset () {
    // if(is)
    ctx.fillStyle = "white";
        ctx.fillRect (0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onErase () {
    ctx.strokeStyle = "white";
}
// function onImageInput (e) {
//     const file = e.target.files[0];
//     const url = URL.createObjectURL(file);
//     const image = new Image();
//     image.src = url;
//     image.onload = function () {
//         ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//         imageInput.value = null;
//     };
// }
function onImageInput (event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
      ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      fileInput.value = null;
    };
  }
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("click", fillRect);
canvas.addEventListener("mouseleave", stopDraw);
canvas.addEventListener("mouseup", stopDraw);


lineWidth.addEventListener("change", lineWidthChange);
color.addEventListener("change", colorPicker);
colorOption.forEach((color) => color.addEventListener("click", onColorOption));

modeChange.addEventListener("click", onModeChange);
resetOption.addEventListener("click", onReset);
eraserFuntion.addEventListener("click", onErase);
fileInput.addEventListener("change", onImageInput);