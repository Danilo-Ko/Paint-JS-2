// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = 800;
// canvas.height = 800;

// ctx.strokeRect(50, 50, 100, 200);
// ctx.rect(50,50,100,100)
// ctx.rect(150,150,100,100)
// ctx.rect(250,250,100,100)
// ctx.fill();
// ctx.beginPath();
// ctx.rect(350,350,100,100)
// ctx.rect(450,450,100,100)
// ctx.fillStyle = "red";
// // 같은 경로로 묶여 있다.
// setTimeout (() => {ctx.fill();}, 5000);

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();
// ctx.fillStyle = "skyblue";
// 이런식으로 사각형을 만들고 그 안에 색을 채워 놓는다.

// ctx.moveTo (200, 200);
// ctx.fillRect (200, 200, 50, 200);
// ctx.fillRect (400, 200, 50, 200);
// ctx.fillRect (300, 300, 50, 100);
// ctx.fillRect (200, 200, 200, 20);

// ctx.lineTo (150, 200);
// ctx.lineTo (315, 120);
// ctx.lineTo (500, 200);
// ctx.lineTo (400, 200);
// ctx.fill();

// // 사람 그리기


// ctx.fillRect (200, 200, 15, 100);
// ctx.fillRect (250, 200, 60, 200);
// ctx.fillRect (345, 200, 15, 100);

// ctx.arc(280, 155, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath ();
// ctx.fillStyle = "white";
// ctx.arc(260, 145, 5, Math.PI, 2 * Math.PI);
// ctx.arc(300, 145, 5, Math.PI, 2 * Math.PI);
// ctx.fill();

마우스가 움직일 때마다 작은 원을 그리고 그 중심점에서 사방으로 직선을 그리는 코드

// const CANVAS_WIDTH = 800;
// const CANVAS_HEIGHT = 800;

// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = CANVAS_WIDTH;
// canvas.height = CANVAS_HEIGHT;
// // lefttop => 0,0
// //ctx.beginPath()
// //setTimeout(()=>{ctx.fill();},5000)

// const colors = [
// "#ff3838",
// "#ffb8b8",
// "#c56cf0",
// "#ff9f1a",
// "#fff200",
// "#32ff7e",
// "#7efff5",
// ]

// ctx.linewidth = 2;
// let x_coord = 0;
// let y_coord = 0;
// function onclick(event){
// ctx.beginPath();
// ctx.moveTo(x_coord,y_coord);
// ctx.strokeStyle = colors[Math.floor(Math.random()*colors.length)];
// ctx.lineTo(event.offsetX, event.offsetY);
// ctx.stroke();
// }
// // If user lick the mouse, save the mouse point and make a circle.
// function cursor_move(event){
// x_coord = event.offsetX;
// y_coord = event.offsetY;
// ctx.beginPath();
// ctx.arc(x_coord, y_coord, 20, 0, 2*Math.PI);
// ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];
// ctx.fill();
// console.log("d");
// }
// canvas.addEventListener("mousemove", onclick);
// canvas.addEventListener("click", cursor_move);

// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// const CANVAS_SIZE = innerWidth * 0.4;

// canvas.width = CANVAS_SIZE;
// canvas.height = CANVAS_SIZE;

// ctx.lineWidth = 2;

// const colors = [
// '#c56cf0',
// '#ffb8b8',
// '#ff3838',
// '#ff9f1a',
// '#ff9f1a',
// '#fff200',
// '#32ff7e',
// '#7efff5',
// '#18dcff',
// '#7d5fff',
// '#4b4b4b',
// ];

// const beginPoint = {
// x: Math.random() * CANVAS_SIZE,
// y: Math.random() * CANVAS_SIZE,
// };

// function onMove({ offsetX, offsetY }) {
// ctx.beginPath();
// ctx.moveTo(beginPoint.x, beginPoint.y);
// ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];

// ctx.lineTo(offsetX, offsetY);
// ctx.stroke();
// }

// function onClick({ offsetX, offsetY }) {
// beginPoint.x = offsetX;
// beginPoint.y = offsetY;
// }

// canvas.addEventListener('mousemove', onMove);
// canvas.addEventListener('click', onClick);

19.12.2022.

ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 

여기 이 표현식에는 ()를 넣어야 한다. 
ctx.drawImage =image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT; 
이런식으로 표현하면 에러가 난다.